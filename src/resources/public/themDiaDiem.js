(function() {
    window.onload = function() {
        var options = {
            zoom: 14,
            center: new google.maps.LatLng(9.998165399599316,105.09550117829419),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
          
          // Creating the map  
        var map = new google.maps.Map(document.getElementById('mapThemDiaDiem'), options);
          
        google.maps.event.addListener(map, 'click', function(event) {
            $("#kinhDo").val(event.latLng.lat());
            $("#viDo").val(event.latLng.lng());
            //alert('Coordinates: ' + event.latLng.lat() + ', ' + event.latLng.lng());
        });
        // console.log(arrCHTDD);
        setTimeout(() => {
            var arrMaCH=[];
            for (let i = 0; i < arrCHTDD.length; i++) {
                // console.log(arrCH[i]);
                arrMaCH.push(arrCHTDD[i].maCH)
                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(arrCHTDD[i].kinhDo, arrCHTDD[i].viDo),
                    map: map,
                    title: arrCHTDD[i].tenCH
                });
      
                google.maps.event.addListener(marker, 'click', function() {
                    var infowindow = new google.maps.InfoWindow({
                        content: '<div style="width:200px"> <div> <img src="/img/'+arrCHTDD[i].img+'" alt="Image" style="width:200px;height:auto;"> </div>        <div style=" margin-top: 10px"><strong><b>Tên Cửa Hàng: </b>'+arrCHTDD[i].tenCH+'</strong><br> <br><strong><b>Địa Chỉ:</b>'+arrCHTDD[i].diaChi+'</strong> <br> <br> </div></div>'
                    });
                    infowindow.open(map, marker);
                });
            }
            var dem = arrCHTDD.length +1;
            var maCH;
            var tenCH;
            // console.log(arrMaCH)
            if (getParameterByName('maCH') == null){
                while(true){
                    if (dem < 10){
                        maCH = "CH00" + dem;
                        tenCH = "TGDD00" + dem;
    
                    }
                    else if (dem < 100){
                        maCH = "CH0" + dem;
                        tenCH = "TGDD0" + dem;
                    }
                    else{
                        maCH = "CH" + dem;
                        tenCH = "TGDD" + dem;
                    }
                    var bool = false;
                    for (i=0;i<arrMaCH.length;i++){
                        if (arrMaCH[i]==maCH){
                            bool = true
                        }
                    }
                    if (bool == false){
                        break;
                    }
                    dem++;
                }
                
                $("#maCH").val(maCH);
                $("#tenDiaDiem").val(tenCH);
            }
            
          }, 0);
    
    };  
})();