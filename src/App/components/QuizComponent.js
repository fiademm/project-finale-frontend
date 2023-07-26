import React from 'react';
import { Quiz } from 'quiz-component-react';

const locale = {
    "locale": {
        "questionText": "Question",
        "nextButton": "Next",
        "resultText": "Your result",
        "endText": "Сongratulations you passed the quiz",
        "correctText": "Correct answers",
        "incorrectText": "Incorrect answers",
        "retryText": "Retry",
      } 
}

const quiz =  {
    "title": "Title quiz",
    "questions": [
      {
        "question": "Paul can't touch the ceiling because he is too ______.",
        "answers": [
          "shortening",
          "shortly",
          "short",
          "shortness"
        ],
        "correctAnswer": "3",
        "point": "20"
      },
      {
        "question": "Paul can't touch the ceiling because he is too ______.",
        "answers": [
          "shortening",
          "shortly",
          "short",
          "shortness"
        ],
        "correctAnswer": "3",
        "point": "20"
      },
      {
        "question": "Paul can't touch the ceiling because he is too ______.",
        "answers": [
          "shortening",
          "shortly",
          "short",
          "shortness"
        ],
        "correctAnswer": "3",
        "point": "20"
      },
      {
        "question": "Paul can't touch the ceiling because he is too ______.",
        "answers": [
          "shortening",
          "shortly",
          "short",
          "shortness"
        ],
        "correctAnswer": "3",
        "point": "20"
      },
    ]
  } 

  function QuizComponent() {
    return (
      <div>
        <Quiz quiz={quiz} isPorgressBar={true} isAllowRetry={true}  />
      </div>
    );
  }

  export default QuizComponent;