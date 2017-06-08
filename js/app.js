$(document).ready(function(){
  var state = {
    // If I need a different API to choose from I can use these
    // url: "https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=7d0ae5aa0b5d49ff9a0470e03d42275d",
    // url2: "https://newsapi.org/v1/articles?source=talksport&sortBy=latest&apiKey=7d0ae5aa0b5d49ff9a0470e03d42275d"

    url:  "https://newsapi.org/v1/articles?source=talksport&sortBy=latest&apiKey=7d0ae5aa0b5d49ff9a0470e03d42275d",
    url2: "https://newsapi.org/v1/articles?source=talksport&sortBy=top&apiKey=7d0ae5aa0b5d49ff9a0470e03d42275d"
};


function getApi(){
  $.getJSON(state.url,function(data){
    // console.log(data);
    // $(".latest").append(data.articles[0].urlToImage);

    data.articles.forEach(function(ele){
      var article = ele;
      var url = article.url;
      var urlImg = article.urlToImage;
      var title = article.title;
      var image = "<a href='" + url + "' target='_blank'>" + "<section class='top-stories'>" + "<img src=" + urlImg + ">" + "<p class='title'>" + title + "</p>" + "</section>" + "</a>";
      $(".latest").append(image);
      console.log(url);
        // URL for our pictures
      // article.urlToImage

    })
  });

  $.getJSON(state.url2,function(data){
    // console.log(data);
    data.articles.forEach(function(ele){
      // console.log(ele);
    })
  });
}

getApi();
});
