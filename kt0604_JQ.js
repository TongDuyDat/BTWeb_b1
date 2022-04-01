$(document).ready(()=>{
        $("#btnShow").click(()=>{
            if($("[name='rd_Select_Option']")[1].checked){
                var text_Name= $("#textName").val()
                var tb_Sub=$("[name='cb_MonHoc']")
                if(text_Name==""){
                    (!tb_Sub[0].checked&&!tb_Sub[1].checked)?alert("Bạn chưa nhập tên\nBạn chưa nhập môn hoc"):alert("Bạn chưa nhập tên")
                }
                else{
                s = "Tên:"+text_Name
                TA= tb_Sub[0].checked?"Tiếng Anh":""
                TT= tb_Sub[1].checked?"Tiếng Trung":""
                only=tb_Sub[0].checked&&tb_Sub[1].checked?"\nĐã chọn 2 môn học:":"\nChỉ chọn môn:"
                result= (!tb_Sub[0].checked&&!tb_Sub[1].checked)?"Bạn chưa nhập môn hoc":s+only+TA+" "+TT
                alert("JQuery\n"+result)
                }}
        })
})