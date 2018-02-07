function onClickKeyword_news() {

  var json_News_Text = '{"topics": [{"key": "Sweden","matching_results": 1615},{"key": "South Korea","matching_results": 348},{"key": "United States","matching_results": 271},{"key": "German language","matching_results": 266}]}'
  var contact = JSON.parse(json_News_Text);


    var tmp_string="";
    var topic_cnt = contact.topics.length;
    for(var cnt=0; cnt<topic_cnt; cnt++){

      document.getElementById("keyword_list_all").innerHTML += "<a href=a>"+ '#' + contact.topics[cnt].key + ' ';

    }

//hi
  var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  };
}
