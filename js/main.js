var myQuestions = [

{ question: "What is an example of a WarmBlood?",
	answers: {
		a: 'Welch Cob',
		b: 'Thoughbred',
		c: 'Candian WarmBlood'
	},
correctAnswer: 'c'
},

{ question: "What is a foal?",
	answers: {
		a: 'A baby horse',
		b: 'A Gelding',
		c: 'A mature male horse'
	},
correctAnswer: 'a'
},

{ question: "What is a stallion?",
	answers: {
		a: 'A colt',
		b: 'A female horse',
		c: 'A mature male horse'
	},
correctAnswer: 'c'
}
];


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

	function showQuestions(questions, quizContainer){
		var output = [];
		var answers;
				// for each question
		for(var i=0; i<questions.length; i++){
				answers = [];
            // for each available answer...
		for(letter in questions[i].answers){
				answers.push(
					'<label>'
					+ '<input type = "radio" name="question'+i+        '" value="'+letter+'">'
					+ letter + ' :  '
					+ questions[i].answers[letter]
					+ '</label> '
					);
		}		
            // add this question and its answers to the output
			output.push(
				'<div class="question">'+questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'	
				);
		}
        // finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');

	}


	function showResults(questions, quizContainer, resultsContainer){

		// obtain the answers from the quiz and keep track of users answers

		var answerContainer = quizContainer.querySelectorAll('.answers');
		var userAnswer = '';
		var numCorrect = 0;

		// then for each answer

		for (var i=0; i<questions.length; i++){

			// get the correct answer

		userAnswer = (answerContainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
			// if the answner is correct

		if(userAnswer==questions[i].correctAnswer){
			// add to the number of correct answers and color it green
			numCorrect++;
			answerContainer[i].style.color = "lightgreen";
		}	
			// if the answer is wrong or blank
		else{
			answerContainer[i].style.color = 'red';

			}	

		}

			// show the number of correct answers out of the total

			resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

	}

	// show the questions right away 
	showQuestions(questions, quizContainer);

	// on submit, show the results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);

	}


}




    