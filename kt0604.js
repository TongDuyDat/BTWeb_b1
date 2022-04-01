function show_Data(){
    var text_Name = document.getElementById("textName")
    var checkMonhoc=document.getElementsByName("cb_MonHoc")
    if(text_Name.value==""){
        (!checkMonhoc[0].checked&&!checkMonhoc[1].checked)?alert("Bạn chưa nhập tên\nBạn chưa nhập môn hoc"):alert("Bạn chưa nhập tên")
    }
    else{
        s = text_Name.value==""?"":"Tên:"+text_Name.value
        TA= checkMonhoc[0].checked?"Tiếng Anh":""
        TT= checkMonhoc[1].checked?"Tiếng Trung":""
        only=checkMonhoc[0].checked&&checkMonhoc[1].checked?"\nĐã chọn 2 môn học:":"\nChỉ chọn môn:"
        chuanhapmonhoc= (!checkMonhoc[0].checked&&!checkMonhoc[1].checked)?"Bạn chưa nhập môn hoc":s+only+TA+" "+TT
        alert(chuanhapmonhoc)
    }
}