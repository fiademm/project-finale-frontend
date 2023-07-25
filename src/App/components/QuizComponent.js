import { Quiz } from 'quiz-component-react';
import React from 'react';
import { quiz } from './QuizSetup';


const QuizComponent = () => {
    
    return(
        <>
            <div>
                <Quiz quiz={quiz} shuffle={true} />
            </div>
        </>
    );
}

export default QuizComponent;









// import React from 'react';
// import { Quiz } from 'quiz-component-react';

// const quiz = {
//     "quizTitle": "React Quiz Component Demo",
//     "quizSynopsis": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
//     "nrOfQuestions": "4",
// }

// const QuizComponent = () => {
//   const quiz = [
//     {
//       question: 'What is the capital of France?',
//       options: [
//         { label: 'London', value: false },
//         { label: 'Paris', value: true },
//         { label: 'Berlin', value: false },
//         { label: 'Madrid', value: false },
//       ],
//     },
//     {
//       question: 'What is the largest country in the world?',
//       options: [
//         { label: 'Russia', value: true },
//         { label: 'China', value: false },
//         { label: 'Canada', value: false },
//         { label: 'USA', value: false },
//       ],
//     },
//   ];

//   const onComplete = (results) => {
//     console.log('Quiz results: ', results);
//   };

//   return (
//     <div>
//       {/* <Quiz
//         questions={questions}
//         onComplete={onComplete}
//         showInstantFeedback={true}
//         continueTillCorrect={false}
//         correctMessage="Great job!"
//         incorrectMessage="Sorry, that's incorrect."
//       /> */}
//       asdas
//       <Quiz quiz={quiz} onComplete={onComplete} isAllowRetry={true} />
//     </div>
//   );
// }

// export default QuizComponent;