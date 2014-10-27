#Replican't

An annoyance free CAPTCHA replacement system.

Instead of ambiguous CAPTCHA, filter out bots by asking your users specific questions that only they know. Because this allows you to pass through your own string values for questions and answers, you're welcome to be as specific as possible (i.e. ask your users to type in all caps or all lowercase, or alternating, or the first two letters caps and the rest lowercase, or only the first word in the sentence, etc.) to filter out bots. 

#Usage

1) Fork and/or download the project via [Github](https://github.com/jelocodes/replican-t), and reference the JavaScript file manually within your own project folder:

```html
<script src="scripts/replicant.js"></script>
```

2) Link up your forms with Replican't to activate the dynamically generating guestions, answer input box, refresh and submit buttons.  
 
```html
<form>
...
<p id="question">Question:</p> 
<button type="button">Refresh</button> 
<input id="answer" type="text" name="answer">
<input type="submit" name="submit" id="submit">
</form>
```

3) Edit the replicant.js file to pass through your desired questions and answers in the proper arrays. Make sure that each question corresponding to each answer is in the same order in the array so that Replican't can verify correctly.

```javascript
// example:
var questionArray = [
	"spell the product of 1x1",
	"spell the product of 3x3",
	"Who played Deckard in Bladerunner, spelled in all lowercase except for the first letter of his last name?",
	"Spell in all caps, Bender's last name from Futurama",
	"From 2001 A Space Oddyssey, finish the sentence (in lowercase): 'I can't let you do that ___.'"
	// feel free to add as many items as you want, with each new item corresponding to the same item order of its equivalent answer listed in the answerArray
];
var answerArray = [
	"one",
	"nine",
	"harrison Ford",
	"RODRIGUEZ",
	"dave"
	// feel free to add as many items as you want, with each new item corresponding to the same item order of its equivalent question listed in the questionArray
];
```

4) Contribute! I coded this in an evening, and is a simple example of something that can be so much better with uh, better code. So if you can, make it better. It's the only way to stop the robot uprising.