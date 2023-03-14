$(document).ready(function () {
    $('#hamburger').click(function (){
        $('.mobile-menu').toggleClass('show')
    })
    $('.calendar-wrapper').calendar();
})