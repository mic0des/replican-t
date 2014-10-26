// $.fn.replicant = function(options) {
// 	var settings = $.extend({
// 		var question = "Are you a robot?",
// 		var answer = "No.",
// 		var input = $('input')
// 	}, options);
// 	var result = if ( input == answer ) {
// 		$.alert("Meatbag confirmed.")
// 	} else {
// 		$.alert("Nice try, automaton.")
// 	});
// 	return result;
// }

var answerObject = {
	one: "one",
	two: "two",
	three: "three",
	four: "four",
	five: "five"
	// feel free to add as many as you want, with each new property corresponding to the same property name of the questionObject
};

var questionArray = [
	"what is 1x1?",
	"what is 1x2?",
	"what is 1x3?",
	"what is 1x4?",
	"what is 1x5?"
	// feel free to add as many as you want, with each new property corresponding to the same property name of the answerObject
];

var randomQuestion = function(questionObject) {
	var questionArray = [
		"what is 1x1?",
		"what is 1x2?",
		"what is 1x3?",
		"what is 1x4?",
		"what is 1x5?"
		// feel free to add as many as you want, with each new property corresponding to the same property name of the answerObject
	];
	var questionIs = questionArray[Math.floor(Math.random()*questionArray.length)];
	console.log(questionIs);
	$('#question').text(questionIs);
	// $("#submit").click(function(){
	// 	$("#target").submit();
	// 	$("#submit").attr("disabled", "disabled");
	// });
	$('#target').submit(function(e) {
		e.preventDefault();
	});
	var q = questionIs;
	console.log(q);
	$('#target').submit(function() {
	var a = $('#answer').val();
	console.log(a);
	});
	var aArray = $.inArray(q,questionArray);
	console.log(aArray)

}

randomQuestion();


var q = $('#question').contents()


$.inArray(q,questionArray)
