$(document).ready(function(){
    var maCH = getParameterByName('maCH')
    
    if (maCH != '')
        searchLocation(maCH)
});
function searchLocation(maCH) {
    var location = arrCH.find(ch => ch.maCH.toLowerCase() === maCH.toLowerCase());
    if (location) {
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
            content: '<div style="width:200px"> <div> <img src="/img/'+location.img+'" alt="Image" style="width:200px;height:auto;"> </div>        <div style=" margin-top: 10px"><strong><b>Tên Cửa Hàng: </b>'+location.tenCH+'</strong><br> <br><strong><b>Địa Chỉ:</b>'+location.diaChi+'</strong> <br> <br> <form method="post" action="/">    <input type="text" name="maCH" value="'+location.maCH+'" hidden /><button class="buttonXoa" type="submit">Xoá</button>  <input type="button" id="buttonThongKe'+location.maCH+'" class="buttonThongKe"  value="Thống Kê" /></form> </div> </div>'
        // content: '<div style="width:200px"> <div> <img src="/img/'+arrCH[i].img+'" alt="Image" style="width:200px;height:auto;"> </div>        <div style=" margin-top: 10px"><strong><b>Tên Cửa Hàng: </b>'+arrCH[i].tenCH+'</strong><br> <br><strong><b>Địa Chỉ:</b>'+arrCH[i].diaChi+'</strong> <br> <br> <form method="get" action="/thongKe">    <input type="text" name="maCH" value="'+arrCH[i].maCH+'" hidden /><button class="buttonThongKe" type="submit">Thống Kê</button>  </form> </div> </div>'

        });
        infowindow.open(map, marker);
        
        google.maps.event.addListenerOnce(infowindow, 'domready', function() {
            $("#buttonThongKe"+location.maCH).click(function(){
                console.log("123");
                window.location.replace("/thongKe?tenCH="+location.tenCH)
            });
        });
    } else {
        console.log("Không tìm thấy địa điểm với MaCH: " + maCH);
    }
}