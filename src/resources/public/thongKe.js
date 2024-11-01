let myPieChartLuotBan; // Biến toàn cục để lưu biểu đồ lượt bán
let myPieChartDanhThu; // Biến toàn cục để lưu biểu đồ doanh thu

function thongKe(tenHHTK, soLuong, tongSoLuong) {
    // Xóa biểu đồ cũ nếu đã tồn tại
    if (myPieChartLuotBan) {
        myPieChartLuotBan.destroy();
    }

    var labels = Array.isArray(tenHHTK) ? tenHHTK : [tenHHTK, "Các sản phẩm còn lại"];
    var data = Array.isArray(tenHHTK) ? soLuong : [soLuong, tongSoLuong - soLuong];

    var barColors = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
    var borderColor = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];

    var ctx = document.getElementById('thongKeLuotBan').getContext('2d');
    myPieChartLuotBan = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Số lượng hàng hóa',
                data: data,
                backgroundColor: barColors,
                borderColor: borderColor
            }]
        },
        options: {
            title: {
                display: true,
                text: "Biểu đồ số sản phẩm được bán trong thời gian tìm kiếm"
            }
        }
    });
}

function thongKeDanhThu(tenHHTK, soLuong, tongSoLuong) {
    // Xóa biểu đồ cũ nếu đã tồn tại
    if (myPieChartDanhThu) {
        myPieChartDanhThu.destroy();
    }

    var labels = Array.isArray(tenHHTK) ? tenHHTK : [tenHHTK, "Các sản phẩm còn lại"];
    var data = Array.isArray(tenHHTK) ? soLuong : [soLuong, tongSoLuong - soLuong];

    var barColors = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'];
    var borderColor = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'];

    var ctx = document.getElementById('thongKeDanhThu').getContext('2d');
    myPieChartDanhThu = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Số lượng hàng hóa',
                data: data,
                backgroundColor: barColors,
                borderColor: borderColor
            }]
        },
        options: {
            title: {
                display: true,
                text: "Biểu đồ danh thu sản phẩm được bán trong thời gian tìm kiếm"
            }
        }
    });
}
