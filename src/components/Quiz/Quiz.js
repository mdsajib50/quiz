import React from 'react';
import { useLoaderData } from 'react-router';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {
    const quizDetails = useLoaderData()
    const{name,total,questions}= quizDetails.data
    
    
    return (
        <div>
            <div>
                <h1 className='font-extrabold text-xl'>{name} Quiz</h1>
                <h1 className='font-extrabold text-xl'>Total: {total}</h1>
                <div className='bg-yellow-200'>
                
            </div>
            </div>
            <div>
                {
                    questions.map(question =>{return <QuizDetails key={question.id} questioned={question}></QuizDetails>
                     } )
                }
            </div>
        </div>
    );
};

export default Quiz;