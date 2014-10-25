$.fn.replicant = function(options) {
	var settings = $.extend({
		var question = "Are you a robot?",
		var answer = "No.",
		var input = $('input')
	}, options);
	var result = if ( input == answer ) {
		$.alert("Meatbag confirmed.")
	} else {
		$.alert("Nice try, automaton.")
	});
	return result;
}