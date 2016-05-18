var slickInitialize = 

$('.carousel_tile_1').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});

$('.carousel_tile_2').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});

$('.carousel_tile_3').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});

$('.property-carousel').slick({
  infinite: true,
  slidesToShow: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        speed: 500,
        adaptiveHeight: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});

$('.quote-slider').slick({
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false,
  dots: false,
  fade: true,
  autoplay: true,
  cssEase: 'ease'
});

module.exports = slickInitialize;

