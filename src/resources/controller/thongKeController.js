const hh = require('../model/hangHoa')
const tksl = require('../model/thongKeSoLuong')
const tkdt = require('../model/thongKeDanhThu')

class thongKeController{
    
    // [/GET] /dangnhap

        index(req,res){
            if (req.session.username == null)
                res.redirect('/dangNhap')
            else{
                hh((error,results)=>{
                    if (error) console.error('Error fetching data:', error);
                    
                    var arr = results.map(result => result);
                    req.session.arrHH = arr;
                    // console.log(req.session.arrCH); 
                    res.render('thongKe',{username:req.session.username , arrCH: req.session.arrCH , arrHH: req.session.arrHH});
                })
            }

        }

    // [/POST] /dangnhap
        
    thongKe(req, res) {
        let tenCH = req.body.tenCH;
        let tenHH = req.body.tenHH;
        let tuNgay = req.body.tuNgay;
        let denNgay = req.body.denNgay;
        tksl(tenCH,tenHH,tuNgay,denNgay,(error,results)=>{
            if (error) {
                console.error('Error fetching data:', error);
                res.status(500).send('Error fetching data');
            } else {
                var sl=0;
                results.forEach(element => {
                    sl += element.soLuong
                });
                // var sl = results[0].SL;
                var arr = results.map(result => result);
                // console.log(arr);
                tkdt(tenCH,tuNgay,denNgay,(error,results)=>{
                    if (error) {
                        console.error('Error fetching data:', error);
                        res.status(500).send('Error fetching data');
                    } else {
                        var tsl= results[0].tongsoluong;
                        var tdt= results[0].tongdanhthu;
                        res.render('thongKe',{username:req.session.username , arrCH: req.session.arrCH , arrHH: req.session.arrHH , soLuong:sl , thongKe:arr , tongSoLuong:tsl , tongDanhThu:tdt , tuNgay:tuNgay , denNgay: denNgay});
                    }
                })
            }
        })
    }
    
}

module.exports = new thongKeController