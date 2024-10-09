$(document).ready(function(){
    
    var i = true;
    $("#imgTimKiem").click(function(){
        if (i){
            i = false
            $("#TTTK").css("display","block");
            $("#TTTK").css("width","500px");
            $("#TTTK").css("margin-top","-28px");
            $("#TTTK").css("border","1px solid black")
        }
        else{
            timKiem()
        }
    });

    $("#thongTinTimKiem").keypress(function(event) {
        if (event.which === 13) { // Kiểm tra nếu phím Enter được nhấn
            timKiem();
        }
    });

});

function timKiem(){
    var muc = $("#mucTimKiem").val();
    var thongTin = $("#thongTinTimKiem").val();
    location.replace("/?"+muc+"="+thongTin)
}