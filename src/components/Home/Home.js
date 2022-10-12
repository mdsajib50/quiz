import React from 'react';
import { useLoaderData } from 'react-router';
import Topic from '../Topic/Topic';
const Home = () => {
    const quizzes = useLoaderData()

    const {data} = quizzes

    return (
        <div>
            <div className='w-92% bg-green-300 p-10 text-start text-lg mb-4 rounded-r-full '>
            <h1 className='text-center'><span className='font-semibold text-rose-700 '>Quiz-Play</span> is a quiz site.<br></br>
                 You can play quizzes on different topics.<br></br>
                  You play quizzes to develop your knowledge.<br></br>
                 Enjoy your learning.
            </h1>
            </div>
            <div className='sm:grid grid-cols-1 gap-x-2 w-full lg:grid grid-cols-2 gap-2 w-1/2'>
                
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