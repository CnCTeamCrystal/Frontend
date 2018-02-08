//chart
$("#start_ajax").click(function(){
  var company = $("#Company").val();
  $("#compTitle").text(company);
    $.ajax({
        type:"POST",
        url:"http://169.56.88.197:8080/chart ",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: {name:company},
        dataType : "json",
        success: function(xml){
            var result = xml;
            Plotly.plot(ids="Chart",result.data,result.layout || {});
//            alert("hhello");
            keyword();
        },
        error: function(xhr, status, error) {
            alert(error);
        }
    });
});
//period
$("#start_ajax2").click(function(){
  var company = $("#compTitle").text();
  document.getElementById("keyword_list_all2").innerHTML="";
  $.ajax({
      type:"GET",
      url:"http://169.56.88.197:9090/discovery/period/"+company+"/"+$("#sdate").val()+"/"+$("#edate").val(),
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      dataType : "json",
      success: function(xml){
          var result = xml;
          for(var i in result.results){
            //document.write("url:"+result.results[i].url+"<br>");
            var kd;
            for(key in result.results[i].highlight){

              if(key == "enriched_title.keywords.text"  ){
                //document.write(result.results[i].highlight[key]+" ");
                kd = "#"+result.results[i].highlight[key];
                document.getElementById("keyword_list_all2").innerHTML += "<a href="+result.results[i].url+"style=\"color:rgb(255,255,255)\">"+ kd+"&nbsp;";
              }
              // else if(key == "enriched_text.keywords.text"){
              //   //document.write(result.results[i].highlight[key]+" ");
              //   kd += "#"+result.results[i].highlight[key];
              // }
            }

          //  document.write("<br>");
          }
      },
      error: function(xhr, status, error) {
          alert(error);
      }
  });
});
function keyword(){
   var company = $("#Company").val();
   document.getElementById("keyword_list_all").innerHTML="";
   document.getElementById("keyword_list_all2").innerHTML="";
//  alert("keyword");
    $.ajax({
        type:"GET",
        url:"http://169.56.88.197:9090/discovery/realtime/"+company,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType : "json",
        success: function(xml){
            var result = xml;
            for(var i in result.results){
              //document.write("url:"+result.results[i].url+"<br>");
              var kd;
              for(key in result.results[i].highlight){
                if(key == "enriched_title.keywords.text"  ){
                  //document.write(result.results[i].highlight[key]+" ");
                  kd = "#"+result.results[i].highlight[key];
                  document.getElementById("keyword_list_all").innerHTML += "<a href="+result.results[i].url+"style=color:rgb(0,0,0)>"+ kd+"&nbsp;";
                }
                // else if(key == "enriched_text.keywords.text"){
                //   //document.write(result.results[i].highlight[key]+" ");
                //   kd += "#"+result.results[i].highlight[key];
                // }
              }

            //  document.write("<br>");
            }
        },
        error: function(xhr, status, error) {
            alert(error);
        }
    });
}

function positive(){
   var company = $("#compTitle").text();
  // $("#compTitle").text(company);
  alert("keyword");
    $.ajax({
        type:"GET",
        url:"http://169.56.88.197:9090/discovery/positive/"+company,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType : "json",
        success: function(xml){
            var result = xml;
            for(var i in result.keywords){
              document.getElementById("keyword_list_all3").innerHTML += "#"+result.keywords[i]+"&nbsp;";
            }
        },
        error: function(xhr, status, error) {
            alert(error);
        }
    });
}
