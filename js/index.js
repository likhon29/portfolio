$(document).ready(function () {
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });
  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    );
  });
});

var number = document.getElementById('value');
var count_value = 0;
function running_animation() {
  if (count_value == 50) {
    clearInterval();
  } else {
    count_value = count_value + 1;
    number.innerHTML = count_value + '%';
  }
}
running_animation();
setInterval(running_animation, 40);

// var typed = new Typed(".typing", {
//   strings: ["Md Abdur Rouf Likhon","Student" , "Programmer", "Web Developer"],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true
// });

// var typed = new Typed(".typing-2", {
//   strings: ["Md Abdur Rouf Likhon","Student" , "Programmer", "Web Developer"],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true
// });

document.addEventListener('DOMContentLoaded', function (event) {
  // array with texts to type in typewriter
  var dataText = [
    'Md Abdur Rouf Likhon.',
    'Programmer.',
    'Web Developer.',
    'Student.',
    'Md Abdur Rouf Likhon.',
  ];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      document.querySelector('h1').innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function () {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function () {
        StartTextAnimation(0);
      }, 20000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

function showNotification() {
  alert('Thank You for contact with me...!!!..');
}

// 52E502C68F2676A42A57D61EFE1AD329DEAC
