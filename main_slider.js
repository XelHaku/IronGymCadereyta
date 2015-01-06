//'use strict';

$(function() {
    /* Slider settings 
$('.slider').css({ width: '720px', height: '400px',overflow: 'hidden' });
$('#slider .slider').css({ width: '6000px', height: '400px',display:'block',margin:'0',padding:'0' });
$('#slider .slide').css({ width: '720px', height: '400px',float:'left',list-style-type:'none' });

    */


    //settings for slider
    var winwidth = $(window).width();
    var winheight =2*winwidth/3;
    //winwidth = '720px';
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;
   
    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

var styles = {'height':winheight,'width':winwidth,'maxWidth': winwidth};
    $slider.css(styles);

    styles = {'height':winheight,'width':5*winwidth,'maxWidth': 5*winwidth};
    $slideContainer.css(styles);
    
    styles = {'height':winheight,'width':winwidth,'maxWidth': winwidth};
    $slides.css(styles);
    //$('.slide').css(styles);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+winwidth}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    //$slideContainer.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

    startSlider();


});