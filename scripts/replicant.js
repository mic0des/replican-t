var answerArray = [
	"one",
	"two",
	"nine",
	"harrison Ford",
	"RODRIGUEZ",
	"own",
	"dave"
	// feel free to add as many as you want, with each new item corresponding to the same item order of its equivalent question listed in the questionArray
];

var questionArray = [
	"spell the product of 1x1",
	"spell the product of 1x2",
	"spell the product of 3x3",
	"Who played Deckard in Bladerunner, spelled in all lowercase except for the first letter of his last name?",
	"Spell in all caps, Bender's last name from Futurama",
	"What is the third word in the line starting with 'Declare' on this webpage?",
	"From 2001 A Space Oddyssey, finish the sentence (in lowercase): 'I can't let you do that ___.'"
	// feel free to add as many as you want, with each new item corresponding to the same item order of its equivalent answer listed in the answerArray
];

var randomQuestion = function(questionObject) {
	var questionIs = questionArray[Math.floor(Math.random()*questionArray.length)];
	$('#question').text(questionIs);
	$('#target').submit(function(e) {
		e.preventDefault();
	});
	var q = questionIs;
	console.log(q);
	return questionIs
}

var questionGet = function(){
	var qArrayValue = $.inArray(randomQuestion(),questionArray);
	console.log(qArrayValue);
	questionActual: return qArrayValue;
};


var answerGet = function(){	$('#target').submit(function(){
		var a = $('#answer').val();
		var aArrayValue = $.inArray(a, answerArray);
		console.log(aArrayValue);
		answerActual: return aArrayValue
	});
}

	var compare = function(){ 
	$('#target').submit(function() {
		var questionValue = $('#question').html();
		var questionValueArray = $.inArray(questionValue, questionArray);
		console.log(questionValueArray);
		var a = $('#answer').val();
		var aArrayValue = $.inArray(a, answerArray);
	if (questionValueArray == aArrayValue) {
		swal("Meatbag confirmed. Proceed.");
		$('#answer').val('');
	} else {
		swal("Nice try, automaton.");
		$('#answer').val('');
		$('input[type="submit"]').attr('disabled', 'disabled');
	}
});
};

var refresh = function(){
	$('button').click(function(){
		var questionIs = questionArray[Math.floor(Math.random()*questionArray.length)];
		$('#question').text(questionIs);
		$('input[type="submit"]').removeAttr('disabled');
		});
	}

questionGet();
answerGet();
compare();
refresh();
