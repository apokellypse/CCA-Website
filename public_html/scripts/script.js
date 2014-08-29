$(document).ready(function() {
	console.log("Welcome to the Cornell Computer Animation Club website.\nAssuming you're interested in how it's put together, we're currently looking for a person to\nhelp the officers maintin the website and keep it updated. Let us know if you're interested.")
	// $('aside').css("height", $(document).height()-160);

	$('article > ul > li').click(function() {
		var ind = $(this).index() + 1;
		console.log("the index of the question is " + ind);
		if ($('ul > li:nth-child(' + ind + ') span').html() == "+") {
			$('ul > li:nth-child(' + ind + ') > ul > li').css("display", "block");
			$('ul > li:nth-child(' + ind + ') span').html("&ndash;");
			console.log("question " + ind + " is expanding");
		} else {
			$('ul > li:nth-child(' + ind + ') > ul > li').css("display", "none");
			$('ul > li:nth-child(' + ind + ') span').html("+");
			console.log("question " + ind + " is contracting");
		}

	})

});