$(function(){
    $('img').on('click', function(){
        $(this).hide('swing',function(){
            alert('이미지가 사라졌다!!!찾아라!!'),
            $(this).show('slow');
        });
    });

    $('#btn_show').on('click',function(){
        $('img').show();
    });
});