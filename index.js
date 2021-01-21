let requestURL = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const res = request.response;
  console.log(res);
}