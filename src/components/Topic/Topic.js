import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id,name,logo,total}= topic
    return (
        <div className='sm:w-full border-2 border-red-700 bg-green-300 mb-2 lg:border-2 border-red-700'>
            <img className='w-full' src={logo}></img>
            <p><b>{name}</b></p>
            <p>Total <b>{total}</b></p>
            <Link to={`/quiz/${id}`}>Play Quiz</Link>
        </div>
    );
};

export default Topic;