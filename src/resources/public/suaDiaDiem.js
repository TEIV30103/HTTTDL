$(document).ready(function(){
    var maCH = getParameterByName('maCH');
    $("#maCH").val(maCH);
    var tenCH = getParameterByName('tenCH');
    $("#tenDiaDiem").val(tenCH);
    var diaChi = getParameterByName('diaChi');
    $("#diaChi").val(diaChi);
    var img = getParameterByName('img');
    if(img != null){
        $("#hinhAnhSua").val(img)
        fetch(img)
            .then(response => response.blob())
            .then(blob => {
            const file = new File([blob], img, { type: blob.type }); // Đặt tên tệp và loại tệp
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            $("#hinhAnh").prop('files', dataTransfer.files); // Gán FileList vào input
        });  
    }   
    var kinhDo = getParameterByName('kinhDo');
    $("#kinhDo").val(kinhDo);
    var viDo = getParameterByName('viDo');
    $("#viDo").val(viDo);
    if (tenCH != null)
        $("#submit").val("Sửa")
})