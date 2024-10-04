const CH = require('../model/cuaHangTrenMap')
const xdd = require('../model/xoaDiaDiem')

class homeController{
    
    // [/GET] /home

        index(req,res){
            CH(req,res)
        }
    // [/POST] /home

        xoaDiaDiem(req,res){
            xdd(req,res)
        }

}

module.exports = new homeController