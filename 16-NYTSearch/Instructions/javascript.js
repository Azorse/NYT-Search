$(document).ready(function() {
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=o2vcperVGsOc6vsT1GtVVHn4usOtkmV6";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
});
