$('.a1').hide();
$('.a2').hide();
$('.a3').hide();
$(".picture1").mouseenter(function() {
    $(".a1").show()
    $(this).css("opacity",0.5);
})
$(".picture1").mouseleave(function() {
    $(".a1").hide()
    $(this).css("opacity",1);
}
)
$(".picture2").mouseenter(function() {
    $(".a2").show()
    $(this).css("opacity",0.5);
})
$(".picture2").mouseleave(function() {
    $(".a2").hide()
    $(this).css("opacity",1);
}
)
$(".picture3").mouseenter(function() {
    $(".a3").show()
    $(this).css("opacity",0.5);
})
$(".picture3").mouseleave(function() {
    $(".a3").hide()
    $(this).css("opacity",1);
}
)
0