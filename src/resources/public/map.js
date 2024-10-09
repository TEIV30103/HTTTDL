var options = {
  zoom: 12,
  center: new google.maps.LatLng(10.0302843,105.0706395),
  mapTypeId: google.maps.MapTypeId.ROADMAP
};


var map = new google.maps.Map(document.getElementById('map'), options);
$(document).ready(function(){
    
    setTimeout(() => {
      
      for (let i = 0; i < arrCH.length; i++) {
          // console.log(arrCH[i]);
          let marker = new google.maps.Marker({
            position: new google.maps.LatLng(arrCH[i].kinhDo, arrCH[i].viDo),
            map: map,
              title: arrCH[i].tenCH
            });
            
            google.maps.event.addListener(marker, 'click', function() {
              var infowindow = new google.maps.InfoWindow({
                content: '<div style="width:200px"> <div> <img src="/img/'+arrCH[i].img+'" alt="Image" style="width:200px;height:auto;"> </div>        <div style=" margin-top: 10px"><strong><b>Tên Cửa Hàng: </b>'+arrCH[i].tenCH+'</strong><br> <br><strong><b>Địa Chỉ:</b>'+arrCH[i].diaChi+'</strong> <br> <br> <form method="post" action="/">    <input type="text" name="maCH" value="'+arrCH[i].maCH+'" hidden /><button class="buttonXoa" type="submit">Xoá</button>  <input type="button" id="buttonThongKe'+arrCH[i].maCH+'" class="buttonThongKe"  value="Thống Kê" /> <input type="button" id="buttonSua'+arrCH[i].maCH+'" class="buttonThongKe"  value="Sửa Thông Tin" /></form> </div> </div>'
                // content: '<div style="width:200px"> <div> <img src="/img/'+arrCH[i].img+'" alt="Image" style="width:200px;height:auto;"> </div>        <div style=" margin-top: 10px"><strong><b>Tên Cửa Hàng: </b>'+arrCH[i].tenCH+'</strong><br> <br><strong><b>Địa Chỉ:</b>'+arrCH[i].diaChi+'</strong> <br> <br> <form method="get" action="/thongKe">    <input type="text" name="maCH" value="'+arrCH[i].maCH+'" hidden /><button class="buttonThongKe" type="submit">Thống Kê</button>  </form> </div> </div>'

              });
              infowindow.open(map, marker);
              
              google.maps.event.addListenerOnce(infowindow, 'domready', function() {
                $("#buttonThongKe"+arrCH[i].maCH).click(function(){
                    location.replace("/thongKe?tenCH="+arrCH[i].tenCH)
                });

                $("#buttonSua"+arrCH[i].maCH).click(function(){
                    location.replace("/suaDiaDiem?maCH="+arrCH[i].maCH+"&&tenCH="+arrCH[i].tenCH+"&&diaChi="+arrCH[i].diaChi+"&&img="+arrCH[i].img+"&&kinhDo="+arrCH[i].kinhDo+"&&viDo="+arrCH[i].viDo)
                });
              });
          });
      }
    }, 0);
    
 })