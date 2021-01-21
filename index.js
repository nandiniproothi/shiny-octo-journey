var url;
let requestURL = 'https://saurav.tech/NewsAPI/everything/cnn.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const res = request.response;
  console.log(res);
  const num = Math.floor((Math.random() * res.articles.length));
  console.log(num);
  url = res.articles[num].url;
}

function externalWeb(){
    console.log("clicked");
    window.open(url);
    window.location.reload()
}