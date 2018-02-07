$("#start_ajax").click(function(){
   var company = $("#Company").val();
   $("#compTitle").text(company);
    $.ajax({
        type:"GET",
        url:"http://169.56.88.197:9090/discovery/realtime/"+company,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType : "json",
        success: function(xml){
            var result = xml;
            alert(result);
        },
        error: function(xhr, status, error) {
            alert(error);
        }
    });
});
