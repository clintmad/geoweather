var url = "https://newsapi.org/v1/articles?source=";
var source = "techcrunch";
var apiKey = "a9775ab4adcc49fdbeee1e3a5873d2e0";
var apiUrl = url + source + "&apiKey=" + apiKey;

$.getJSON(apiUrl).then(function getNews(data) {
    console.log(data);
    renderNews(data);
});

function renderNews(data) {
    var template = "";
    var newsElem = document.getElementById("my-news");

    for (var i = 0; i < data.articles.length; i++) {
        var thisArticle = data.articles[i];
        template += `
      <div class="news-box flex">
        <div class="img-flex">
          <img class="image" src="${thisArticle.urlToImage}">
        </div>
        <div class="article">
          <h3>${thisArticle.title}</h3>
          <h4><span>${thisArticle.author}</span></h4>
          <p><span>${thisArticle.description}</span></p>
          <a href="${thisArticle.url}" target="_blank"><span>View Article</span></a>
        </div>
      </div>
    `;
    }
    newsElem.innerHTML = template;
}
