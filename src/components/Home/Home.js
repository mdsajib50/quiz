import React from 'react';
import { useLoaderData } from 'react-router';
import Topics from '../Topics/Topics';

const Home = () => {
    const quizzes = useLoaderData()
    const {data} =quizzes
    console.log(data)
    return (
        <div className='w-full bg-green-300 p-10 text-start text-lg'>
            <h1><span className='font-semibold text-rose-700'>Quiz-Play</span> is a quiz site.<br></br>
                 You can play quizzes on different topics.<br></br>
                  You play quizzes to develop your knowledge.<br></br>
                 Enjoy your learning.
            </h1>
            <div>
                {
                    data.map((quiz) => {
                        <Topics key={quiz.id} quiz={quiz.id}></Topics>
                        console.log(quiz.id)
                    })
                }
            </div>
        </div>
    );
};

export default Home;