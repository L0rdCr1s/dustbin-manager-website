// sticking navigation bar
$(document).ready(function () {
  $("#topnav").sticky({
    topSpacing: 0,
    zIndex: 1999
  });
});

// $(document).ready(function () {
//   $(".media-card-header").sticky({
//     topSpacing: 80,
//     zIndex: 1040
//   });
// });

// sticking side contents on info subsystem pages
$(document).ready(function () {
  $("#info-event-side-card").sticky({
    topSpacing: 80,
    zIndex: 0
  });
});


$(document).ready(function () {
  $("#club-info").sticky({
    topSpacing: 80,
    zIndex: 19999
  });
});

$(document).ready(function () {
  $("#events-calendar").sticky({
    topSpacing: 80,
    zIndex: 0
  });
});

// CKEDITOR.replace( 'place' ).setData("dsfdfdfd");
// CKEDITOR.instances['place'].setData("fsfdsfsd");


// $(document).ready(function () {
//   $("#info-advertisement-side-card").sticky({
//     topSpacing: 410,
//     zIndex: 0
//   });
// });

// $(document).ready(function () {
//   $("#footer").sticky({
//     topSpacing: 0,
//     zIndex: 0
//   });
// });


$(document).ready(function () {
  $('.latest-container').slick({
    draggable: true,
    slidesPerRow: 4,
    arrows: false,
    responsive: [{

      breakpoint: 415,
      settings: {
        slidesPerRow: 1,
        centerMode: true,
      }

    }, {

      breakpoint: 810,
      settings: {
        slidesPerRow: 3,
        centerMode: true,
      }

    },]
  });
});

$(document).ready(function () {
  $('#events-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    variableWidth: true,
    responsive: [{

      breakpoint: 415,
      settings: {
        slidesPerRow: 1,
        centerMode: true,
      }

    }, {

      breakpoint: 810,
      settings: {
        slidesPerRow: 3,
        centerMode: true,
      }

    },]
  });
});

$(document).ready(function () {
  $('.home-video-slick-view').slick({
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.home-video-slick'
  });
});

$(document).ready(function () {
  $('.home-video-slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.home-video-slick-view'',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    responsive: [{

      breakpoint: 1025,
      settings: {
        slidesToShow: 3.25,
        slidesToScroll: 1,
      }
    }]
  });
});


$(document).ready(function () {
  $('.rally-images-slick-gallery-view').slick({
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.rally-images-slick-gallery'
  });
});

$(document).ready(function () {
  $('.rally-images-slick-gallery').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.rally-images-slick-gallery-view',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    responsive: [{

      breakpoint: 1025,
      settings: {
        slidesToShow: 3.25,
        slidesToScroll: 1,
      }
    },{

      breakpoint: 641,
      settings: {
        slidesToShow: 1.57,
        slidesToScroll: 1,
      }
    },{

      breakpoint: 415,
      settings: {
        slidesToShow: 1.26,
        slidesToScroll: 1,
      }
    },{

      breakpoint: 385,
      settings: {
        slidesToShow: 1.11,
        slidesToScroll: 1,
      }
    },{

      breakpoint: 376,
      settings: {
        slidesToShow: 1.07,
        slidesToScroll: 1,
      }
    },{

      breakpoint: 365,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }

    }]
  });
});

$(document).ready(function () {
  $('.rally-images-slick').slick({
    slidesToShow: 2.6,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: true,
    responsive: [{

      breakpoint: 1025,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 1,
      }
    },{

      breakpoint: 835,
      settings: {
        slidesToShow: 1.4,
        slidesToScroll: 1,
      }
    },{

      breakpoint: 641,
      settings: {
        slidesToShow: 1.65,
        slidesToScroll: 1,
      }
    },{

      breakpoint: 415,
      settings: {
        slidesToShow: 1.26,
        slidesToScroll: 1,
      }
    },{

      breakpoint: 385,
      settings: {
        slidesToShow: 1.11,
        slidesToScroll: 1,
      }
    },{

      breakpoint: 376,
      settings: {
        slidesToShow: 1.07,
        slidesToScroll: 1,
      }
    },{

      breakpoint: 365,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }

    }]
  });
});


$(document).ready(function () {
  $('.sponsors').slick({
    draggable: true,
    slidesPerRow: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{

      breakpoint: 415,
      settings: {
        slidesPerRow: 1,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 2000,
      }

    },{

      breakpoint: 810,
      settings: {
        slidesPerRow: 2,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 2000,
      }

    },]
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


  var currencies = [
    { value: 'Afghan afghani', },
    { value: 'Albanian lek', data: 'ALL' },
    { value: 'Algerian dinar', data: 'DZD' },
    { value: 'European euro', data: 'EUR' },
    { value: 'Angolan kwanza', data: 'AOA' },
    { value: 'East Caribbean dollar', data: 'XCD' },
    { value: 'Vietnamese dong', data: 'VND' },
    { value: 'Yemeni rial', data: 'YER' },
    { value: 'Zambian kwacha', data: 'ZMK' },
    { value: 'Zimbabwean dollar', data: 'ZWD' },
  ];


// #################   IMAGES SEARCH
var image_search_contents = [];

$(document).ready(function () {
    $.get("http://rally.co.tz/api/images", function(data){
      data.forEach(element => {
        image_search_contents.push({value: element.event});
      });

  });
});

$('#autocomplete').autocomplete({
  lookup: image_search_contents,
  searchType: 'image',
});


// ########################## VIDEOS SEARCH
var video_search_contents = []

$(document).ready(function () {
  $.get("http://rally.co.tz/api/videos", function(data){
    data.forEach(element => {
      video_search_contents.push({value: element.event});
    });

});
});

$('#video-autocomplete').autocomplete({
  lookup: video_search_contents,
  searchType: 'video',
});


// ######################### NEWS SEARCH

var news_search_contents = []

$(document).ready(function () {
  $.get("http://rally.co.tz/api/news", function(data){
    data.forEach(element => {
      news_search_contents.push({value: element.title});
    });

});
});

$('#news-autocomplete').autocomplete({
  lookup: news_search_contents,
  searchType: 'news',
});


$('#id_date_of_occurance').mask('0000-00-00');
