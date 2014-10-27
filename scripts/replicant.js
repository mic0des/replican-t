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

var answerArray = [
	"one",
	"two",
	"three",
	"four",
	"five"
	// feel free to add as many as you want, with each new property corresponding to the same property name of the questionObject
];

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
	return questionIs
}

var questionGet = function(){
	// $('#target').submit(function() {
	// var a = $('#answer').val();
	// console.log(a);
	// });
	var qArrayValue = $.inArray(randomQuestion(),questionArray);
	console.log(qArrayValue);
	questionActual: return qArrayValue;
};


var answerGet = function(){	$('#target').submit(function(){
		var answerArray = [
			"one",
			"two",
			"three",
			"four",
			"five"
			// feel free to add as many as you want, with each new property corresponding to the same property name of the questionObject
		];
		var a = $('#answer').val();
		var aArrayValue = $.inArray(a, answerArray);
		console.log(aArrayValue);
		answerActual: return aArrayValue
	});
}

	var compare = function(){ 
	$('#target').submit(function() {
	if (answerActual == questionActual) {
		alert("Meatbag confirmed. Proceed.");
	} else {
		alert("Nice try, automaton.")
	}
});
};

questionGet();
answerGet();
compare();
