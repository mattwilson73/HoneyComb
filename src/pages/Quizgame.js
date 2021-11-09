import React, { useState } from 'react';

function Quizgame() {
    const questions = [
		{
			questionText: 'How many eyes do bees have?',
			answerOptions: [
				{ answerText: '3', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '5', isCorrect: true },
				{ answerText: '6', isCorrect: false },
			],
		},
		{
			questionText: 'How many bees can the average beehive hold?',
			answerOptions: [
				{ answerText: '1,000', isCorrect: false },
				{ answerText: '10,000', isCorrect: false },
				{ answerText: '50,000', isCorrect: true },
				{ answerText: '100,000', isCorrect: false },
			],
		},
		{
			questionText: 'Worker bees are female',
			answerOptions: [
				{ answerText: 'True', isCorrect: true },
				{ answerText: 'False', isCorrect: false },
			],
		},
		{
			questionText: 'What color are bees?',
			answerOptions: [
				{ answerText: 'Blue', isCorrect: false },
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Pink', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: true },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false)

    const [score, setScore] = useState(0);

    const handleAnswerButtononClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion); 
        } else {
            setShowScore(true);
        }
        
    }
    return (
		<div className='quizgame'>
			{}
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOptions, index) => (
                            <button onClick={() => handleAnswerButtononClick(answerOptions.isCorrect)}>{answerOptions.answerText} </button>
                        ))}
					</div>
				</>
			)}
		</div>
	);

}
export default Quizgame;