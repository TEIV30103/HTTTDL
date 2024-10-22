function thongKe(tenHHTK,soLuong,tongSoLuong){
    $("#thongKeLuotBanDiv").css("display","block");
        if (Array.isArray(tenHHTK)){
            var labels = tenHHTK
            var data = soLuong
        }
        else{
            var labels = [tenHHTK,"Các sản phẩm còn lại"]
            var data = [soLuong,tongSoLuong-soLuong]
        }
        const barColors = ['rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)']
                                 
        const borderColor = ['rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)']
        // Khởi tạo biểu đồ
        const ctx = document.getElementById('thongKeLuotBan').getContext('2d');
        const myPieChart = new Chart(ctx, {
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

function thongKeDanhThu(tenHHTK,soLuong,tongSoLuong){
    $("#thongKeDanhThuDiv").css("display","block");
        if (Array.isArray(tenHHTK)){
            var labels = tenHHTK
            var data = soLuong
        }
        else{
            var labels = [tenHHTK,"Các sản phẩm còn lại"]
            var data = [soLuong,tongSoLuong-soLuong]
        }
        const barColors = ['rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)']
                                 
        const borderColor = ['rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)']
        // Khởi tạo biểu đồ
        const ctx = document.getElementById('thongKeDanhThu').getContext('2d');
        const myPieChart = new Chart(ctx, {
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