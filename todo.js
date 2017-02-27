$(document).ready(function() {
	$("#images").click(function(){
	    $.getJSON("http://www.reddit.com/r/EarthPorn/new/.json?jsonp=?", function(json) {
		        $("<img/>").attr("src", json.data.children[1].data.url).appendTo(".main");

		});
	});
});