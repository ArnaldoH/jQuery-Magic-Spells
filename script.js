$(".first").click(function(){
    
    $(".woop").fadeOut();
    $(".woomp").fadeIn();
    $(".first2").show();
    $(".first").hide();
});

$(".first2").click(function(){
    $(".woomp").fadeOut();
    $(".womp").fadeIn();
    $(".first3").show();
    $(".first2").hide();
});

$(".first3").click(function(){
    $(".womp").fadeOut();
    $(".woop").fadeIn();
    $(".first").show();
    $(".first3").hide();
});

$(".second").click(function(){
    $(".flip").toggle();
    $(".pilf").toggle();
});

$(".third").click(function(){
    $(".tour").slideUp();
    $(".third").hide();
    $(".wtf").slideDown();
    $(".keys").show();
});
$(".third2").click(function(){
    $(".keys").slideUp();
    $(".wtf").hide(); 
    $(".tour").slideDown();
    $(".third").show();
});
$("h1").click(function(){
    $(".secret").toggle();
});