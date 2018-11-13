
// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});




// fullpage customization
$('#fullpage').fullpage({
  sectionsColor: ['#B8AE9C', '#56bc8a', '#a77dc2', '#fdd257', '#78ffff'],
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  easingcss3: 'cubic-bezier(.825,0,.5,1)',
            parallax: true,
            parallaxOptions: {
                type: 'reveal',
                percentage: 100,
                property: 'translate'
            },
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    $('.l-right').show();
    if(anchorLink == 'firstSection')
  {
     $('.l-right').hide();
  }
  },


  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();


    }
    
  },


  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      
      $header_top.css('background', 'transparent');
      $('.l-right').css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('signup-button').css('color', '#56bc8a');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }

    
      );

    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  } 

  
});


