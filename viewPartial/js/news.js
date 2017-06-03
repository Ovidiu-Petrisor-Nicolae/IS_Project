var doGetNews = function (partialURL, jsonDataToPost) {
	var fullUrl = baseURL + partialURL;
	return $.ajax({
		url: fullUrl,
		headers: {
			"Content-Type":"application/json"
		},
		data: JSON.stringify(jsonDataToPost),
		dataType: "json",
		success: function(allJSON){
			for (var i = 0, len = allJSON.length; i < len; ++i) {
				var news = allJSON[i];
				var newEntry = $("<div class=\"blog-post\"><h2 class=\"blog-post-title\">" + news.title + "</h2><br><p>" + news.information + "</p></div>");
				$('#blog-entries').append(newEntry);
			}
		}
	});
};

/*
daca intr-adevar requestul vine cu json urmator

[
   {
     "id": 1,
     "title": "title 1",
     "information": "info 1"
   },
   {
     "id": 2,
     "title": "title 2",
     "information": "info 2"
   }
]

adica

[{"id": 1,"title": "title 1","information": "info 1"},{"id": 2,"title": "title 2","information": "info 2"}]

*/

<script>
$( "p" ).click(function() {
  var allJSON = JSON.parse('[{"id": 1,"title": "title 1","information": "info 1"},{"id": 2,"title": "title 2","information": "info 2"}]');
  for (var i = 0, len = allJSON.length; i < len; ++i) {
     var news = allJSON[i];
	 $(this).text("<div class=\"blog-post\"><h2 class=\"blog-post-title\">" + news.title + "</h2><br><p>" + news.information + "</p></div>");
  }
});
</script>