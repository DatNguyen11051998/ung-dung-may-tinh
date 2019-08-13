$(document).ready(function(){
    var strCalc = "";
    var strRs = "";
    $('.button').on('click',function(){
        if ($(this).val()!= '='){
            strCalc=$('.calculate').val();
        }else if ($(this).val() == '='){
            strRs = $('.calculate').val();
            $('.calc-his').append('<p>' + strCalc + '=' + strRs + '</p>');
            strCalc='';
        }
        if ($(this).val() == '+' || $(this).val()== '-' || $(this).val() == '*' || $(this).val() == '/'){
            $('.dot').removeAttr('disabled');
        }
    });
    $('.dot').on('click',function(){
        if ($('.calculate').val().indexOf('.') != -1){
            $('.dot').prop('disabled',true);
        }
    });
    $('#buttonDell').on('click', function() {
        $string = $('.calculate').val(); // Lấy giá trị trong ô phép tính
        $('.calculate').val($string.substring(0, $string.length - 1)); // Xoá ký tự cuối cùng chuỗi giá trị trong ô phép tính
    });
    $('#hisButton').on('click',function(){
        $('.calc-history').removeClass('fadeOutLeft');
        $('.calc-history').addClass('active fadeInRight');
    });
    $('#delHis').on('click',function(){
        $('.calc-his').html("");
    });
    $('#closeHis').on('click',function(){
        $('.calc-history').addClass('fadeOutLeft');
        $('.calc-history').removeClass('fadeInRight');
        
    })
});