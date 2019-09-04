function makeBold(){
    
    if(document.getElementById("textarea").style.fontWeight=="bold"){
        document.getElementById("textarea").style.fontWeight="normal";
    }
    else{
        document.getElementById("textarea").style.fontWeight="bold";
    }
}
function makeitalic(){
    if(document.getElementById("textarea").style.fontStyle=="italic"){
        document.getElementById("textarea").style.fontStyle="normal";
    }
    else{
        document.getElementById("textarea").style.fontStyle="italic";
    }
}
function underline(){
    if(document.getElementById("textarea").style.textDecoration=="underline"){
        document.getElementById("textarea").style.textDecoration="none";
    }
    else{
        document.getElementById("textarea").style.textDecoration="underline";
    }

}
function taille(){
document.getElementById("textarea").style.fontSize=document.getElementById("huhu").value;
}
function types(){
document.getElementById("textarea").style.fontFamily=document.getElementById("typetext").value;
}
$(".a1").hide();
$(".a2").hide();
$(".a3").hide();
$(".a4").hide();
$(".a5").hide();
$(".a6").hide();
$(".a7").hide();
$(".a8").hide();
$(".a9").hide();

$(".pic1").mouseenter(function(){
    $(".a1").show();
    $(this).css ("opacity", 0.5)
    })
    $(".pic1").mouseleave(function(){
    $(".a1").hide();
    $(this).css ("opacity",1)
    })

$(".pic1").mouseenter(function(){
    $(".a1").show();
    $(this).css ("opacity", 0.5)
    })
    $(".pic1").mouseleave(function(){
    $(".a1").hide();
    $(this).css ("opacity",1)
    })      

$(".pic1").mouseenter(function(){
    $(".a1").show();
    $(this).css ("opacity", 0.5)
    })
    $(".pic1").mouseleave(function(){
    $(".a1").hide();
    $(this).css ("opacity",1)
    })

$(".pic1").mouseenter(function(){
    $(".a1").show();
    $(this).css ("opacity", 0.5)
    })
    $(".pic1").mouseleave(function(){
    $(".a1").hide();
    $(this).css ("opacity",1)
    })

$(".pic2").mouseenter(function(){
    $(".a2").show();
    $(this).css ("opacity", 0.5)
    })
    $(".pic2").mouseleave(function(){
    $(".a2").hide();
    $(this).css ("opacity",1)
    })

$(".pic3").mouseenter(function(){
    $(".a3").show();
    $(this).css ("opacity", 0.5)
    })
    $(".pic3").mouseleave(function(){
    $(".a3").hide();
    $(this).css ("opacity",1)
    })

$(".pic4").mouseenter(function(){
    $(".a4").show();
    $(this).css ("opacity", 0.5)
    })
    $(".pic4").mouseleave(function(){
    $(".a4").hide();
    $(this).css ("opacity",1)
    })

$(".pic5").mouseenter(function(){
    $(".a5").show();
    $(this).css ("opacity", 0.5)
    })
    $(".pic5").mouseleave(function(){
    $(".a5").hide();
    $(this).css ("opacity",1)
    })

$(".pic6").mouseenter(function(){
    $(".a6").show();
    $(this).css ("opacity", 0.5)
    })
    $(".pic6").mouseleave(function(){
    $(".a6").hide();
    $(this).css ("opacity",1)
    })

$(".pic7").mouseenter(function(){
    $(".a7").show();
    $(this).css ("opacity", 0.5)
    })
    $(".pic7").mouseleave(function(){
    $(".a7").hide();
    $(this).css ("opacity",1)
    })

$(".pic8").mouseenter(function(){
    $(".a8").show();
    $(this).css ("opacity", 0.5)
    })
    $(".pic8").mouseleave(function(){
    $(".a8").hide();
    $(this).css ("opacity",1)
    })

$(".pic9").mouseenter(function(){
    $(".a9").show();
    $(this).css ("opacity", 0.5)
    })
    $(".pic9").mouseleave(function(){
    $(".a9").hide();
    $(this).css ("opacity",1)
    })

