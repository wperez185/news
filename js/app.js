$(document).ready(function () {
    // var weather = "http://api.apixu.com/v1/forecast.json?key=90da794fb2ae411bb7914107172106&q=07112&days=7";
    // $(".weather").append(weather);
    var breakingNews = "https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=7d0ae5aa0b5d49ff9a0470e03d42275d";
    $.getJSON(breakingNews, function (data) {
        var story1ImgUrl = data.articles[0].url;
        var story1Img = "<section class='story-img col-md-6'>" + "<section class='story-title'>" + data.articles[0].title + "</section>" + "<a href='" + data.articles[0].url + "' target='_blank'>" + "<img src='" + data.articles[0].urlToImage + "' class='story'></a>" + "<section class='description'>" + data.articles[0].description + "</section>" + "</section>" + "<hr />";
        // Second story
        var story2ImgUrl = data.articles[4].url;
        var story2Img = "<section class='story-img col-md-6'>" + "<section class='story-title'>" + data.articles[4].title + "</section>" + "<a href='" + data.articles[4].url + "' target='_blank'>" + "<img src='" + data.articles[4].urlToImage + "' class='story'></a>" + "<section class='description'>" + data.articles[4].description + "</section>" + "</section>" + "<hr />";
        // Third story
        var story3ImgUrl = data.articles[6].url;
        var story3Img = "<section class='story-img col-md-6'>" + "<section class='story-title'>" + data.articles[6].title + "</section>" + "<a href='" + data.articles[6].url + "' target='_blank'>" + "<img src='" + data.articles[6].urlToImage + "' class='story'></a>" + "<section class='description'>" + data.articles[6].description + "</section>" + "</section>" + "<hr />";
        // Fourth story
        var story4ImgUrl = data.articles[3].url;
        var story4Img = "<section class='story-img col-md-6'>" + "<section class='story-title'>" + data.articles[3].title + "</section>" + "<a href='" + data.articles[3].url + "' target='_blank'>" + "<img src='" + data.articles[3].urlToImage + "' class='story'></a>" + "<section class='description'>" + data.articles[3].description + "</section>" + "</section>" + "<hr />";
        $(".latest").append(story1Img);

        $(".latest").append(story2Img);

        $(".latest").append(story3Img);

        $(".latest").append(story4Img);
        var breakingNewsLink = "";
        data.articles.forEach(function (ele) {
            // Top section of page for breaking news
            breakingNewsLink += "<section class='breaking-news animated slideOutLef infinite' style='width:100%'><marquee>BREAKING NEWS: " + ele.title + "</marquee></section>";

        });
        $("nav").append(breakingNewsLink);
    });
    $(".breaking-news").addClass("animated slideOutLeft");

    var trendingNow = "https://newsapi.org/v1/articles?source=newsweek&sortBy=top&apiKey=7d0ae5aa0b5d49ff9a0470e03d42275d";
    $.getJSON(trendingNow, function (data) {
        data.articles.forEach(function (ele) {
            var trendingUl = "<section class='trending-articles'>" + "<a href=' " + ele.url + "' target='_blank'>" + ele.title + "<hr>" + "</section>";
            // console.log(ele.description);
            $(".trending-now").append(trendingUl);
        })

    });

    $(".headlines", ".to-the-top", ".dropdown-category").addClass("hide");
    $(".dropdown-menu").change(function () {
        var category = $(this).val();
        var url = "https://newsapi.org/v1/sources?category=" + category;
        $.getJSON(url, function (data) {
            var html = "<option value=''>Please select one</option>";
            data.sources.forEach(function (element) {
                html += "<option value='" + element.id + "'>" + element.name + "</option>";
            });
            $(".dropdown-category").removeClass("hide");
            $(".dropdown-category").html(html);
        });
        // second dropdown menu
        $(".dropdown-category").change(function () {
            $(".headlines").removeClass("hide");
            var source = $(this).val();
            var url = "https://newsapi.org/v1/articles?source=" + source + "&sortBy=top&apiKey=7d0ae5aa0b5d49ff9a0470e03d42275d";
            $(".headlines").html("");
            $.getJSON(url, function (data) {
                data.articles.forEach(function (ele) {
                    var urlLink = "<section class='headlines-stories'>" + "<a href=' " + ele.url + "' target='_blank'>" + "<img src='" + ele.urlToImage + "'>" + "<p class='headlines-title' >" + ele.title + "</p>" + "<hr />" + "</a>" + "</section>";
                    $(".latest").addClass("hide");
                    $(".trending-now").addClass("hide");
                    $(".categories3").addClass("hide");
                    $(".headlines").append(urlLink);
                    $(".categories").removeClass("categories");
                    $(".categories2").addClass("categories2");
                    $(".categories3").removeClass("hide");
                    $(".categories3").addClass("categories3");
                    $(".categories2").addClass("hide");
                    $(".to-the-top").removeClass("hide");
                });
            });
        });
    });

    $(".dropdown-menu2").change(function () {
        var category = $(this).val();
        var url = "https://newsapi.org/v1/sources?category=" + category;
        $.getJSON(url, function (data) {
            var html = "<option value=''>Please select one</option>";
            data.sources.forEach(function (element) {
                html += "<option value='" + element.id + "'>" + element.name + "</option>";
            });
            $(".dropdown-category2").removeClass("hide");
            $(".dropdown-category2").html(html);
        });
        // second dropdown menu
        $(".dropdown-category2").change(function () {
            $(".headlines").removeClass("hide");
            var source = $(this).val();
            var url = "https://newsapi.org/v1/articles?source=" + source + "&sortBy=top&apiKey=7d0ae5aa0b5d49ff9a0470e03d42275d";
            $(".headlines").html("");
            $.getJSON(url, function (data) {
                data.articles.forEach(function (ele) {
                    var urlLink = "<section class='headlines-stories'>" + "<a href=' " + ele.url + "' target='_blank'>" + "<img src='" + ele.urlToImage + "'>" + "<p class='headlines-title' >" + ele.title + "</p>" + "<hr />" + "</a>" + "</section>";
                    $(".latest").addClass("hide");
                    $(".trending-now").addClass("hide");
                    $(".categories3").addClass("hide");
                    $(".headlines").append(urlLink);
                    $(".categories").removeClass("categories");
                    $(".categories2").addClass("categories2");
                    $(".categories3").removeClass("hide");
                    $(".categories3").addClass("categories3");
                    $(".categories2").addClass("hide");
                    $(".to-the-top").removeClass("hide");
                });
            });
        });
    });
});
// });
