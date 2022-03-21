/*Header Animation*/

$(".navbar-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.navbar').toggleClass("on");
    $("nav ul").toggleClass('hidden');
});