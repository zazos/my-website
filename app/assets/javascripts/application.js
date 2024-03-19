// app/assets/javascripts/application.js
//
//= require_self
//= require aos
//= require bootstrap
//= require glightbox
//= require isotope.pkgd
//= require validate
//= require purecounter_vanilla
//= require swiper-bundle.min
//= require typed.umd
//= require noframework.waypoints
//= require jquery/dist/jquery
//= require jquery_ujs
//= require main

document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    AOS.init();
});

document.addEventListener('DOMContentLoaded', function () {
    new Typed('.typed', {
        strings: ["Developer", "Student", "Hobbyist"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});

