const express = require('express')
const session = require('express-session');
const db = require('./connect_DB')

const app = express()

app.use(express.json());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// function thongKe(req,res){
//     let tenCH = req.body.tenCH;
//     let tenHH = req.body.tenHH;
//     let tuNgay = req.body.tuNgay;
//     let denNgay = req.body.denNgay;
//     db.query('SELECT hanghoa.dvt as dvt, cuahang.tenCH as tenCH , chitiethoadon.maHD as maHD, chitiethoadon.soluong as soLuong, chitiethoadon.giatien as giaTien, hanghoa.tenHH as tenHH FROM hoadon , chitiethoadon , hanghoa , cuahang WHERE hoadon.maCH = cuahang.maCH and hoadon.maHD = chitiethoadon.maHD and chitiethoadon.maHH = hanghoa.maHH and cuahang.tenCH = ? and hanghoa.tenHH = ? and hoadon.ngay BETWEEN ? AND ?', [tenCH,tenHH,tuNgay,denNgay], function(error, results, fields) {
//         if (error) {
//             console.error('Error fetching data:', error);
//             res.status(500).send('Error fetching data');
//         } else {
//             var sl=0;
//             results.forEach(element => {
//                 sl += element.soLuong
//             });
//             // var sl = results[0].SL;
//             var arr = results.map(result => result);
//             // console.log(arr);
//             db.query('SELECT sum(chitiethoadon.soluong) as tongsoluong , sum(chitiethoadon.giatien) as tongdanhthu FROM hoadon , chitiethoadon , hanghoa , cuahang WHERE hoadon.maCH = cuahang.maCH and hoadon.maHD = chitiethoadon.maHD and chitiethoadon.maHH = hanghoa.maHH and cuahang.tenCH = ? and hoadon.ngay BETWEEN ? AND ?', [tenCH,tuNgay,denNgay], function(error, results, fields) {
//                 if (error) {
//                     console.error('Error fetching data:', error);
//                     res.status(500).send('Error fetching data');
//                 } else {
//                     var tsl= results[0].tongsoluong;
//                     var tdt= results[0].tongdanhthu;
//                     res.render('thongKe',{username:req.session.username , arrCH: req.session.arrCH , arrHH: req.session.arrHH , soLuong:sl , thongKe:arr , tongSoLuong:tsl , tongDanhThu:tdt , tuNgay:tuNgay , denNgay: denNgay});
//                 }
//             })
//         }
//     });

// }

function thongKeSoLuong(tenCH,tenHH,tuNgay,denNgay,callback){
    db.query('SELECT hanghoa.dvt as dvt, cuahang.tenCH as tenCH , chitiethoadon.maHD as maHD, chitiethoadon.soluong as soLuong, chitiethoadon.giatien as giaTien, hanghoa.tenHH as tenHH, hanghoa.img as img , hoadon.ngay as ngay FROM hoadon , chitiethoadon , hanghoa , cuahang WHERE hoadon.maCH = cuahang.maCH and hoadon.maHD = chitiethoadon.maHD and chitiethoadon.maHH = hanghoa.maHH and cuahang.tenCH like ? and hanghoa.tenHH like ? and hoadon.ngay BETWEEN ? AND ?', [tenCH,tenHH,tuNgay,denNgay],callback)
}

module.exports = thongKeSoLuong