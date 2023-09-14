
document.addEventListener('click', function (event) {
    const navbar = document.querySelector('.navbar-collapse');
    const toggleButton = document.querySelector('.navbar-toggler');

    // Check if the click target is not part of the navbar or the toggle button
    if (!navbar.contains(event.target) && !toggleButton.contains(event.target)) {
        // Check if the navbar is open and close it
        if (navbar.classList.contains('show')) {
            toggleButton.click(); // Simulate a click on the toggle button to close the navbar
        }
    }
});


$(document).ready(function () {
    $('.owl-carousel1').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 1000,
        lazyLoad: false,
        nav: false,
        autoplayHoverPause: true,
        items: 5,
        margin: 20,
        navText: [
            "<i class='fa-solid fa-arrow-left arrowleft1'></i>",
            "<i class='fa-solid fa-arrow-right arrowright1'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false
            },
            600: {
                items: 3,
                nav: false,
                margin: 20,
                dots: false
            },
            1030: {
                items: 5,
                nav: false,
                margin: 20,
                loop: true
            }
        },
        
    });
});
$(document).ready(function () {
    $('.owl-carousel1').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 100000,
        lazyLoad: false,
        nav: false,
        autoplayHoverPause: true,
        items: 5,
        navText: [
            "<i class='fa-solid fa-arrow-left arrowleft1'></i>",
            "<i class='fa-solid fa-arrow-right arrowright1'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false
            },
            600: {
                items: 3,
                nav: true,
                margin: 50,
                dots: false
            },
            1000: {
                items: 5,
                nav: false,
                margin: 20,
                loop: true
            }
        },
    
            items: 5,
            onTranslated: function (event) {
                var currentIndex = event.item.index;
                
                $carousel.find('.item').css('opacity', '1');             
                $carousel.find('.item').eq(currentIndex).css('opacity', '0.5');
                $carousel.find('.item').eq(currentIndex + 4).css('opacity', '0.5');
            }
     
    });
});



const toggleButtons = document.querySelectorAll('.btn-question');
const icons = document.querySelectorAll('.toggle-icon');

toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        icons[index].classList.toggle('fa-plus');
        icons[index].classList.toggle('fa-minus');
    });
});

const toggleButton = document.querySelectorAll('.btn-contant');
const icon = document.querySelectorAll('.toggle-icon');

toggleButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        icon[index].classList.toggle('fa-chevron-down');
        icon[index].classList.toggle('fa-chevron-up');
    });
});



const navbarToggler = document.querySelector('.navbar-toggler');
const navbarTogglerIcon = navbarToggler.querySelector('i');

navbarToggler.addEventListener('click', () => {
    // Toggle the icon between bars and times (X)
    navbarTogglerIcon.classList.toggle('fa-bars');
    navbarTogglerIcon.classList.toggle('fa-times');
});


$('.owl-carousel0').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 100000,
    lazyLoad: false,
    nav: false,
    dots:true,
    autoplayHoverPause: true,
    items:1,
    navText:["<i class='fa-solid fa-arrow-left arrowleft0'></i>","<i class='fa-solid fa-arrow-right arrowright0'></i>"],
    responsive:{
        0:{
            items:1,
            nav: false,
           dots:true,
        },
        600:{
            items:1,
            nav: false,
           dots:true,
        },
        1000:{
            items:1,
            nav:false,
            dots:true,
            loop:true
        }
    }
    }
);



window.addEventListener("scroll", function() {
  var header = document.querySelector("header");

  if (window.scrollY > 100) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
});


  document.addEventListener('click', function (event) {
    const navbar = document.querySelector('.navbar-collapse');
    const toggleButton = document.querySelector('.navbar-toggler');

    // Check if the click target is not part of the navbar or the toggle button
    if (!navbar.contains(event.target) && !toggleButton.contains(event.target)) {
        // Check if the navbar is open and close it
        if (navbar.classList.contains('show')) {
            toggleButton.click(); // Simulate a click on the toggle button to close the navbar
        }
    }
});
var percentageComplete = 0.7;
var strokeDashOffsetValue = 100 - (percentageComplete * 100);
var progressBar = $(".js-progress-bar");
progressBar.css("stroke-dashoffset", strokeDashOffsetValue);