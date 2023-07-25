









// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// function Quiz({ questions }) {
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [score, setScore] = useState(0);
//   const history = useHistory();

//   const handleAnswerSelect = (questionId, answerId) => {
//     setSelectedAnswers({
//       ...selectedAnswers,
//       [questionId]: answerId,
//     });
//   };

//   const handleSubmit = () => {
//     let newScore = 0;
//     questions.forEach((question) => {
//       if (selectedAnswers[question.id] === question.correctAnswerId) {
//         newScore++;
//       }
//     });
//     setScore(newScore);
//     history.push('/quiz-results');
//   };

//   return (
//     <div>
//       {questions.map((question) => (
//         <div key={question.id}>
//           <p>{question.text}</p>
//           {question.answers.map((answer) => (
//             <div key={answer.id}>
//               <input
//                 type="radio"
//                 name={`question-${question.id}`}
//                 id={`answer-${answer.id}`}
//                 onChange={() => handleAnswerSelect(question.id, answer.id)}
//                 checked={selectedAnswers[question.id] === answer.id}
//               />
//               <label htmlFor={`answer-${answer.id}`}>{answer.text}</label>
//             </div>
//           ))}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// export default Quiz;