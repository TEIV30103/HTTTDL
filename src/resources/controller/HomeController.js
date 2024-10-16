const CH = require('../model/cuaHangTrenMap')
const xdd = require('../model/xoaDiaDiem')

class homeController{
    
    // [/GET] /home

        index(req,res){
            // CH(req,res)
            CH((error,results)=>{
                if (error) {
                    console.error('Error fetching data:', error);
                    res.status(500).send('Error fetching data');
                } else {
                    var arr = results.map(result => result);
                    req.session.arrCH = arr;
                    // console.log(req.session.arrCH); 
                    res.render('home',{username:req.session.username , arrCH: req.session.arrCH});
                }
            })
        }
    // [/POST] /home

        xoaDiaDiem(req,res){
            let maCH = req.body.maCH;
            xdd(maCH,(error)=>{
                if (error) throw error;
                res.redirect('/');
            })
        }

}

module.exports = new homeController