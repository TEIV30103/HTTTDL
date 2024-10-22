$(document).ready(function(){
    var maCH = getParameterByName('maCH')
    
    if (maCH != null)
        setTimeout(()=>{
            searchLocation(locationMaCH(maCH))
        },1000)

    var tenCH = getParameterByName('tenCH')
    
    if (tenCH != null)
        setTimeout(() => {
            searchLocation(locationTenCH(tenCH))
        }, 1000);
});
function locationMaCH(maCH){
    var location = arrCH.find(ch => ch.maCH.toLowerCase() === maCH.toLowerCase());
    return location
}

function locationTenCH(tenCH){
    var arr = arrCH.map(ch => ch.tenCH.toLowerCase() === tenCH.toLowerCase());
    let i=0
    var location=[]
    arr.forEach(element => {
       if(element){
        location.push(arrCH[i])
       }
       i++ 
    });
    let j =0;
    location.forEach(element=>{
        j ++
    })
    if (j >=2)
        return location
    return location[0]
} 

function searchLocation(location) {
    if (location) {
        if(Array.isArray(location)){
            var map1 = new google.maps.Map(document.getElementById('map'), options);
            location.forEach(location =>{
                
                    map.setOptions({
                    center: new google.maps.LatLng(location.kinhDo,location.viDo),
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
                let marker = new google.maps.Marker({
                position: new google.maps.LatLng(location.kinhDo, location.viDo),
                map: map1,
                    title: location.tenCH
                });
                google.maps.event.addListener(marker, 'click', function() {
                    var infowindow = new google.maps.InfoWindow({
                        content: '<div style="width:200px"> <div> <img src="/img/'+location.img+'" alt="Image" style="width:200px;height:auto;"> </div>        <div style=" margin-top: 10px"><strong><b>Tên Cửa Hàng: </b>'+location.tenCH+'</strong><br> <br><strong><b>Địa Chỉ:</b>'+location.diaChi+'</strong> <br> <br> <form method="post" action="/">    <input type="text" name="maCH" value="'+location.maCH+'" hidden /><button class="buttonXoa" type="submit">Xoá</button>  <input type="button" id="buttonThongKe'+location.maCH+'" class="buttonThongKe"  value="Thống Kê" /> <input type="button" id="buttonSua'+location.maCH+'" class="buttonThongKe"  value="Sửa Thông Tin" /></form> </div> </div>'
                        // content: '<div style="width:200px"> <div> <img src="/img/'+arrCH[i].img+'" alt="Image" style="width:200px;height:auto;"> </div>        <div style=" margin-top: 10px"><strong><b>Tên Cửa Hàng: </b>'+arrCH[i].tenCH+'</strong><br> <br><strong><b>Địa Chỉ:</b>'+arrCH[i].diaChi+'</strong> <br> <br> <form method="get" action="/thongKe">    <input type="text" name="maCH" value="'+arrCH[i].maCH+'" hidden /><button class="buttonThongKe" type="submit">Thống Kê</button>  </form> </div> </div>'
                        
                    });
                    infowindow.open(map1, marker);
                    
                    google.maps.event.addListenerOnce(infowindow, 'domready', function() {
                        $("#buttonThongKe"+location.maCH).click(function(){
                            console.log("123");
                            window.location.replace("/thongKe?tenCH="+location.tenCH)
                        });

                        $("#buttonSua"+location.maCH).click(function(){
                            console.log("123");
                            window.location.replace("/suaDiaDiem?maCH="+location.maCH+"&&tenCH="+location.tenCH+"&&diaChi="+location.diaChi+"&&img="+location.img+"&&kinhDo="+location.kinhDo+"&&viDo="+location.viDo)
                        });
                    });
                })
            })
        }
        else{
            
            map.setOptions({
                center: new google.maps.LatLng(location.kinhDo,location.viDo),
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            let marker = new google.maps.Marker({
                position: new google.maps.LatLng(location.kinhDo, location.viDo),
                map: map,
                    title: location.tenCH
            });
            
            var infowindow = new google.maps.InfoWindow({
                content: '<div style="width:200px"> <div> <img src="/img/'+location.img+'" alt="Image" style="width:200px;height:auto;"> </div>        <div style=" margin-top: 10px"><strong><b>Tên Cửa Hàng: </b>'+location.tenCH+'</strong><br> <br><strong><b>Địa Chỉ:</b>'+location.diaChi+'</strong> <br> <br> <form method="post" action="/">    <input type="text" name="maCH" value="'+location.maCH+'" hidden /><button class="buttonXoa" type="submit">Xoá</button>  <input type="button" id="buttonThongKe'+location.maCH+'" class="buttonThongKe"  value="Thống Kê" /> <input type="button" id="buttonSua'+location.maCH+'" class="buttonThongKe"  value="Sửa Thông Tin" /></form> </div> </div>'
                // content: '<div style="width:200px"> <div> <img src="/img/'+arrCH[i].img+'" alt="Image" style="width:200px;height:auto;"> </div>        <div style=" margin-top: 10px"><strong><b>Tên Cửa Hàng: </b>'+arrCH[i].tenCH+'</strong><br> <br><strong><b>Địa Chỉ:</b>'+arrCH[i].diaChi+'</strong> <br> <br> <form method="get" action="/thongKe">    <input type="text" name="maCH" value="'+arrCH[i].maCH+'" hidden /><button class="buttonThongKe" type="submit">Thống Kê</button>  </form> </div> </div>'
                
            });
            infowindow.open(map, marker);
            
            google.maps.event.addListenerOnce(infowindow, 'domready', function() {
                $("#buttonThongKe"+location.maCH).click(function(){
                    console.log("123");
                    window.location.replace("/thongKe?tenCH="+location.tenCH)
                });

                $("#buttonSua"+location.maCH).click(function(){
                    console.log("123");
                    window.location.replace("/suaDiaDiem?maCH="+location.maCH+"&&tenCH="+location.tenCH+"&&diaChi="+location.diaChi+"&&img="+location.img+"&&kinhDo="+location.kinhDo+"&&viDo="+location.viDo)
                });
            });

            google.maps.event.addListener(marker, 'click', function() {
                var infowindow = new google.maps.InfoWindow({
                  content: '<div style="width:200px"> <div> <img src="/img/'+location.img+'" alt="Image" style="width:200px;height:auto;"> </div>        <div style=" margin-top: 10px"><strong><b>Tên Cửa Hàng: </b>'+location.tenCH+'</strong><br> <br><strong><b>Địa Chỉ:</b>'+location.diaChi+'</strong> <br> <br> <form method="post" action="/">    <input type="text" name="maCH" value="'+location.maCH+'" hidden /><button class="buttonXoa" type="submit">Xoá</button>  <input type="button" id="buttonThongKe'+location.maCH+'" class="buttonThongKe"  value="Thống Kê" /> <input type="button" id="buttonSua'+location.maCH+'" class="buttonThongKe"  value="Sửa Thông Tin" /></form> </div> </div>'
                  // content: '<div style="width:200px"> <div> <img src="/img/'+location.img+'" alt="Image" style="width:200px;height:auto;"> </div>        <div style=" margin-top: 10px"><strong><b>Tên Cửa Hàng: </b>'+location.tenCH+'</strong><br> <br><strong><b>Địa Chỉ:</b>'+location.diaChi+'</strong> <br> <br> <form method="get" action="/thongKe">    <input type="text" name="maCH" value="'+location.maCH+'" hidden /><button class="buttonThongKe" type="submit">Thống Kê</button>  </form> </div> </div>'
  
                });
                infowindow.open(map, marker);
                
                google.maps.event.addListenerOnce(infowindow, 'domready', function() {
                  $("#buttonThongKe"+location.maCH).click(function(){
                      location.replace("/thongKe?tenCH="+location.tenCH)
                  });
  
                  $("#buttonSua"+location.maCH).click(function(){
                      location.replace("/suaDiaDiem?maCH="+location.maCH+"&&tenCH="+location.tenCH+"&&diaChi="+location.diaChi+"&&img="+location.img+"&&kinhDo="+location.kinhDo+"&&viDo="+location.viDo)
                  });
                });
            });
        }
    } else {
        console.log("Không tìm thấy địa điểm với MaCH: " + maCH);
    }
}