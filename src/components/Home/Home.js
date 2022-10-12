import React from 'react';
import { useLoaderData } from 'react-router';
import Topic from '../Topic/Topic';
const Home = () => {
    const quizzes = useLoaderData()

    const {data} = quizzes

    return (
        <div>
            <div className='w-full bg-green-300 p-10 text-start text-lg'>
            <h1><span className='font-semibold text-rose-700'>Quiz-Play</span> is a quiz site.<br></br>
                 You can play quizzes on different topics.<br></br>
                  You play quizzes to develop your knowledge.<br></br>
                 Enjoy your learning.
            </h1>
            </div>
            <div className='flex md:grid grid-cols-1'>
                
                {
                    data.map(topic =>{
                      return <Topic key={topic.id} topic={topic}></Topic>
                       
                    })
                }
            </div>
        
        </div>
    );
};

export default Home;