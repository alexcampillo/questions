$(document).ready(function() {
//add questions
	var questions = [
		{
			question: "Not too bad huh?",
			choices: ["nope, not at all", "this is so great", "the universe salutes you"],
		},
		{
			question: "How about another question?",
			choices: ["tesla model s", "lots of money", "pizza"],
		},
		{
			question: "More questions?",
			choices: ["20 dollar salad", "tete", "Maria's"],
		},
		{
			question: "How many questions are in this quiz?",
			choices: ["fried mushroom", "no"],
		},
		{
			question: "Is this it?",
			choices: ["true", "false", "maybe", "the universe salutes you"],
		},
	]

	var questionNumber = 0;
	var answers = [];
	var showQuestion = $('.showQuestion')
	var showQuestionChoices = $('.showQuestionChoices')

	showQuestion.text(questions[0].question)
	for(i = 0; i < questions[0].choices.length; i++){
			showQuestionChoices.append('<article class="choice row"><input class="left" name="answer" type="radio" value="' +  questions[0].choices[i] + '"><p>' + questions[0].choices[i] + '</p></article>');
		}

//display questions one at a time
	$('.nextQuestion').click(function(e) {
		e.preventDefault();

		choose();

		$('.showQuestionChoices .choice').remove();
		questionNumber += 1;
		var currentQ = questions[questionNumber];

		showQuestion.text(currentQ.question);

		for(i = 0; i < currentQ.choices.length; i++){
			showQuestionChoices.append('<article class="choice row"><input class="left" name="answer" type="radio" value="' +  currentQ.choices[i] + '"><p>' + currentQ.choices[i] + '</p></article>');
		}
		
		return false
	});

	function choose() {
        choice = $('input[name="answer"]:checked').val();
        answers.push(choice);
        console.log(answers);
    }
// $('#next').on('click', function (e) {
//         e.preventDefault();

//         // Suspend click listener during fade animation
//         if(quiz.is(':animated')) {        
//             return false;
//         }
//         choose();

//         // If no user selection, progress is stopped
//         if (isNaN(selections[questionCounter])) {
//             alert('Please make a selection!');
//         } else {
//             questionCounter++;
//             displayNext();
//         }
//     });

});
