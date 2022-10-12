import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id,name,logo,total}= topic
    return (
        <div className='w-1/2 bg-green-300  border-2 border-red-700 m-2'>
            <img className='w-1/2' src={logo}></img>
            <p><b>{name}</b></p>
            <p>Total <b>{total}</b></p>
            <Link to={`/quiz/${id}`}>Play Quiz</Link>
        </div>
    );
};

export default Topic;