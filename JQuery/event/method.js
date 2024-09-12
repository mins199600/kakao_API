$(function(){
   /* $("h1").click(function(){
        $(this).css("background-color","gold")
    })
    $("h1").mouseleave(function(){
        $(this).css("background-color","skyblue")
    })
    $("h1").mouseenter(function(){
        $(this).css("background-color","red")
    })*/

    $("h1").on({
        click : function(){ 
            $(this).css("background-color","gold")
        },
        mouseleave : function(){
            $(this).css("background-color","skyblue")
        }, 
        mouseenter : function(){
            $(this).css("background-color","green")
        }  
    });
})