import React from 'react';
import { useLoaderData } from 'react-router';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quizzes = useLoaderData()
    const {data}= quizzes

    return (
        <div className='flex'>
           {
                data.map(topic =>{
                    return <Topic key={topic.id} topic={topic}></Topic>
                     
                  })
           }
        </div>
    );
};

export default Topics;