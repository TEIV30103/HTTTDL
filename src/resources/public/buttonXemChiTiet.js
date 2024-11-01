if (typeof tenHHTK === 'undefined') {
    let tenHHTK;
    let danhThuHHTK ;
    let soLuong ;
    let arr ;
    let tongSoLuong;
    let tongDanhThu;
}
$(document).ready(function(){
    $("#xemTKCu").hide()
    $("#loiTK").hide()
    
    $("#DongKQTimKiem").click(function(){
        $("#ketQuaTimKiem").hide(1000)
        $("#xemTKCu").show(1000)
    })
    
    $("#xemTKCu").click(function(){
        if( $("#TKCu").css("margin-right") == "-800px"){
            $("#TKCu").css("margin-right","0px")
        }
        else{
            $("#TKCu").css("margin-right","-800px")
        }
        
    })
    
    $("#TK1").click(function(){
        $("#ketQuaTimKiem").show(1000,function(){
            showThongKe(tenHHTK,soLuong,tongSoLuong,danhThuHHTK,tongDanhThu)
        })
        $("#xemTKCu").hide(1000)
        $("#TKCu").css("margin-right","-800px")
    })

    $("#buttonLoiTK").click(function(){
        $("#loiTK").hide(500)
    })
});

function showThongKe(tenHHTK,soLuong,tongSoLuong,danhThuHHTK,tongDanhThu){
    $("#ketQuaTimKiem").css("display","block");
    thongKe(tenHHTK,soLuong,tongSoLuong)
    thongKeDanhThu(tenHHTK,danhThuHHTK,tongDanhThu)
}

function updateTable(maHang, tenCH, hangHoa, ngayLap, soLuong, giaTien , hinhAnh){
    let newRow = $("<tr></tr>");
    let cell1 = $("<td></td>").text(maHang);
    let cell2 = $("<td></td>").text(tenCH);
    let cell3 = $("<td></td>").text(hangHoa);
    let cell4 = $("<td></td>").text(ngayLap);
    let cell5 = $("<td></td>").text(soLuong);
    let cell6 = $("<td></td>").text(giaTien+" đ").css({
        "text-align": "right"
    });
    console.log(hinhAnh)
    let imgElement = $("<img>").attr("src", "/img/"+hinhAnh).attr("alt", hangHoa).css({
        width: "50px", // Đặt chiều rộng cho hình ảnh
        height: "auto" // Đặt chiều cao tự động
    });

    let cell7 = $("<td></td>").append(imgElement);

    newRow.append(cell1);
    newRow.append(cell2);
    newRow.append(cell3);
    newRow.append(cell7);
    newRow.append(cell4);
    newRow.append(cell5);
    newRow.append(cell6);

    $("#tableTK").append(newRow)
}

function clearTable(){
    $("#tableTK").html('');
}

function setupTable(){
    let newRow = $("<tr></tr>");
    let cell1 = $("<th></th>").text("Mã hoá đơn");
    let cell2 = $("<th></th>").text("Tên Của Hàng");
    let cell3 = $("<th></th>").text("Hàng hoá");
    let cell4 = $("<th></th>").text("Ngày lập");
    let cell5 = $("<th></th>").text("Số lượng");
    let cell6 = $("<th></th>").text("Giá tiền");
    let cell7 = $("<th></th>").text("Hình ảnh");

    newRow.append(cell1);
    newRow.append(cell2);
    newRow.append(cell3);
    newRow.append(cell7);
    newRow.append(cell4);
    newRow.append(cell5);
    newRow.append(cell6);

    $("#tableTK").append(newRow)
}