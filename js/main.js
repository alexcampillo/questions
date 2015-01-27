$(document).ready(function() {
//add questions
	var questions = [
		{
			question: "Not too bad huh?",
			choices: ["nope, not at all", "this is so great", "the universe salutes you"],
			answer: 0
		},
		{
			question: "How about another question?",
			choices: ["tesla model s", "lots of money", "pizza"],
			answer: 0
		},
		{
			question: "More questions?",
			choices: ["20 dollar salad", "tete", "Maria's"],
			answer: 0
		},
		{
			question: "How many questions are in this quiz?",
			choices: ["fried mushroom", "no"],
			answer: 0
		},
		{
			question: "Is this it?",
			choices: ["true", "false", "maybe", "the universe salutes you"],
			answer: 0
		},
	]

	var questionNumber = 0;
	var answers = [];
	var showQuestion = $('.showQuestion')
	var showQuestionChoices = $('.showQuestionChoices')

	showQuestion.text(questions[0].question)
	for(i = 0; i < questions[0].choices.length; i++){
			showQuestionChoices.append('<article class="choice row"><input class="left" type="radio"><p>' + questions[0].choices[i] + '</p></article>');
		}

//display questions one at a time
	$('.nextQuestion').click(function() {
		$('.showQuestionChoices .choice').remove();
		questionNumber += 1;
		var currentQ = questions[questionNumber];

		showQuestion.text(currentQ.question);
		console.log(currentQ.choices[questionNumber])

		for(i = 0; i < currentQ.choices.length; i++){
			showQuestionChoices.append('<article class="choice row"><input class="left" type="radio"><p>' + currentQ.choices[i] + '</p></article>');
		}
	});


});
