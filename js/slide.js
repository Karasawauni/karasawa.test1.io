$('.car-list').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  responsive: [
    {
    breakpoint: 890,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 625,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
]
});

'use strict'

function change(){
  document.getElementById('favoritebt').textContent='Remove';

}

document.getElementById('chuo').addEventListener('click',change);

