$(function(){
   // $('.outer').click(function(){
     //   $(this).css("background-color","#EAB8E4");
   // })

   $('.outer').on('click',function(){
    $(this).css("background-color","#EAB8E4");
   })

   /*$('[type=text]').focus(function(){
    $(this).css("background-color","#A6C8E0");
   })

   $('[type=text]').blur(function(){
    $(this).css("background-color"," #FFAB40");
   })*/

   /* $('[type=text]').on('focus',function(){
        $(this).css("background-color","#A6C8E0");
    })

    $('[type=text]').on('blur',function(){
        $(this).css("background-color"," #D81B60");
    })*/

    $('[type=text]').on({
        focus : function(){
            $(this).css("background-color","#A6C8E0");
        },
        blur : function(){
            $(this).css("background-color","#D81B60");
    }    
});


})