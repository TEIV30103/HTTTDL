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

function thongKeDanhThu(tenCH,tuNgay,denNgay,callback){
    db.query('SELECT sum(chitiethoadon.soluong) as tongsoluong , sum(chitiethoadon.giatien) as tongdanhthu FROM hoadon , chitiethoadon , hanghoa , cuahang WHERE hoadon.maCH = cuahang.maCH and hoadon.maHD = chitiethoadon.maHD and chitiethoadon.maHH = hanghoa.maHH and cuahang.tenCH = ? and hoadon.ngay BETWEEN ? AND ?', [tenCH,tuNgay,denNgay],callback)
}

module.exports = thongKeDanhThu