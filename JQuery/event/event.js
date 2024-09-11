$(function(){
    $("p").mouseenter(function(){
        $(this).css("background-color","lavender");
    });
    $("p").mouseleave(function(){
        $(this).css("background-color","skyblue");
    });
    $("p").mouseup(function(){
        $(this).css("background-color","#FFABAB");
    });
    $("p").mousedown(function(){
        $(this).css("background-color","#B9FBC0");
    });
    $("p").hover(function(){
        $(this).css("background-color","red");
    });
    $('.outer').mouseover(function(){
        console.log('마우스 오버 이벤트 발생');
    });
    $('.outer').mouseenter(function(){
        console.log('마우스 엔터 이벤트 발생');
    });

    $('.inner').mouseover(function(){
        console.log('마우스 inner오버 이벤트 발생');
    });
    $('.inner').mouseenter(function(){
        console.log('마우스 inner엔터 이벤트 발생');
    });
    $('.outer2').mouseover(function(){
        console.log('마우스 오버 이벤트 발생');
    });
    $('.outer2').hover(function(){
        console.log('마우스 호버 이벤트 발생');
    });
    $('.inner2').mouseover(function(){
        console.log('마우스 inner 오버 이벤트 발생');
    });
    $('.inner2').mouseenter(function(){
        console.log('마우스 inner 엔터 이벤트 발생');
    });
});
