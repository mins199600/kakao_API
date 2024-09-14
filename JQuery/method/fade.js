$(function(){
   // $('div#a').fadeIn();

    $('#btn_fade').on('click', function(){
        $('div#a').fadeIn();
        $('div#b').fadeIn("slow", function(){
            alert('끝');
        });
        $('div#c').fadeIn(3000);
    });

    $('#btn_fadeout').on('click',function(){
        $('div#a').fadeOut(3000);
        $('div#b').fadeOut("slow", function(){
            alert('끝');
        });
        $('div#c').fadeOut(2000);
    });

    $('#btn_fade_toggle').on('click',function(){
        $('div#a').fadeToggle(3000, function(){
            console.log('끝');
        });

    })

    $('#btn_fade_to').on('click',function(){
         $('div#a').fadeToggle("slow",0);
        });
});
