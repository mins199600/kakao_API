$(function(){
    $('.btn').on('click',function(){
        $('.ani_box').animate({
            /*top:'100px',
            left:'100px',
            width : '+=200px',
            height : '+=500px',
            fontSize : '2rem',
            padding : '20px',
            margin : '100px',
            opacity : '0.7'
            },3000,function(){
                 $(this).css('background-color','#FFB6C1');*/

                 width:'toggle'
            });

        $('.ani_box').animate({width:'100px'},'slow');
        $('.ani_box').animate({height:'200px'},'fast');    
        });
    });