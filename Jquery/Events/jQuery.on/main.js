$(document).ready(function(){

// $("p").on("mouseout mouseover",function(e){
//     $('this').toggleClass("light");
    
// });

$('p').on({
    mouseover:function(){
        $('body').css('background','lightgreen');

    },
    mouseout:function(){
        $('body').css('background','lightblue');

    },
    click:function(){
        $('body').css('background','orange');

    }
});

$('div').on('click',function(){
    $(this).css({"color":"red",
                  "background":"pink"         
                }
        );
    $(this).slideToggle(1000);    
    
});


});


