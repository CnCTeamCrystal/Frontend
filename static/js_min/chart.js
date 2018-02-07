
<script src="{{ url_for('static',filename='js_min/keyword.js') }}"></script>
$("#start_ajax").click(function(){
   var company = $("#Company").val();
   $("#compTitle").text(company);
    $.ajax({
        type:"POST",
        url:"http://169.56.88.197:8080/chart ",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: {name: company},
        dataType : "json",
        success: function(xml){
            var result = xml;
            Plotly.plot(ids="Chart",result.data,result.layout || {});
            keyword();
        },
        error: function(xhr, status, error) {
            alert(error);
        }
    });
});
