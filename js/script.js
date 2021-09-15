jQuery(document).ready(function () {
  // Banner Slider

  $('.catalog-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  //   Brand section
  function setDots() {
    $('.owl-dots').removeClass('disabled');
  }
  $('.brand-wrapper').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: true,
    nav: false,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      500: {
        items: 3,
        nav: false,
      },
      992: {
        items: 4,
        loop: true,
      },
    },
    onInitialized: setDots,
    onChanged: setDots,
  });

  //   Item section
  $('.item-wrapper').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1000: {
        items: 4,
      },
    },
  });

  // Product zoom

  // $('.zoom-img').picZoomer();
  $('.menu-img').on('click', function (event) {
    var $pic = $(this).find('img');

    $('.zoom-img img').attr('src', $pic.attr('src'));
  });
});

const modal = document.querySelector('.modal--signup');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal--signup');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// CAROUSEL
let total = $('.carousel-item').length;
let currentIndex = $('div.active').index() + 1;
let currentIndexText = 'one';
$('#slidetext').html('0' + currentIndex + ' / ' + '0' + total);

$('#slidetext02').html('Slide ' + currentIndexText);

// This triggers after each slide change
$('.carousel').on('slid.bs.carousel', function () {
  currentIndex = $('div.active').index() + 1;
  if (currentIndex == 1) {
    currentIndexText = 'one';
  } else if (currentIndex == 2) {
    currentIndexText = 'two';
  } else if (currentIndex == 3) {
    currentIndexText = 'three';
  } else if (currentIndex == 4) {
    currentIndexText = 'four';
  } else if (currentIndex == 5) {
    currentIndexText = 'five';
  }

  // Now display this wherever you want
  let text = '0' + currentIndex + ' / ' + '0' + total;
  $('#slidetext').html(text);

  let text2 = 'Slide ' + currentIndexText;
  $('#slidetext02').html(text2);
});
