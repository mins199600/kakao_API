$(function(){
    $("button").click(function(){
       // $(this).css("background-color","lightpink");
        //클릭한 (이)곳에만 배경을 밝은핑크로 바꿔줘! this > button으로 바꿔도 가능 
        //버튼이 2개라면 this > button으로 바뀌면 클릭과 동시에 모든 버튼 색깔만 바뀜
        //그래서 this 를 쓰면 모든 버튼중 하나의 버튼만 클릭하면 클릭한 버튼의 색만 바뀌고 button을 쓰면 모든 버튼이 클릭과 동시에 색깔이 바뀜
        $("p:last").css("background-color","yellow");
    })
})
/*$(function(){
    $("button").click(function(){
        $("*").css("background-color","lightpink");
        //모든 스타일 요소의 background 컬러는 하늘색으로 바꿔!
    })
}) */

    $(function(){
        $("button").click(function(){
            $("ul li:first-child").css("background-color","Thistle");
        })
    })
    
    $(function(){
        $("button").click(function(){
            $("[href='http://nate.com']").css("background-color","PaleTurquoise");
        })
    })
    $(function(){
        $("button").click(function(){
            $('tr:odd').css("background-color","PaleTurquoise");
            $('tr:even').css("background-color","Honeydew");
        })
    })        