const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const { MongoClient } = require('mongodb');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.epizi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db('doctorsPortal');
    const appointmentsCollection = database.collection('appointments');
    app.post('/appointments', async (req, res) => {
      const appointment = req.body;
      console.log(appointment);
      const result = await appointmentsCollection.insertOne(appointment);

      res.json(result);
    });
    app.post('/appointmentsByDate', (req, res) => {
      const date = req.body;
      console.log(date.date);
        appointmentsCollection
        .find({ date: date.date })
        .toArray((err, documents) => {
          res.send(documents);
        });
    });
  } finally {
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello Doctors portal!');
});

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
