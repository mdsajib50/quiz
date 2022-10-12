import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const QuizDetails = ({questioned}) => {
    const {correctAnswer,question,id,options}=questioned
    const [formValue, setFormValue]= useState([])
    let answers =[...formValue]
   
    const notify = () => toast

    
    
      
   const handelFormValve = e =>{
       
       const value = e.target.value
       if(value === correctAnswer){
           
        toast("Answer is correct!");
    
       }else{
           
        toast("Answer is wrong!");
       }
       setFormValue([
           ...formValue,
           [value]
       ])

   }
    return (
        <div>
        <div className='bg-slate-400 border-2 rounded m-4 p-3'>
            <h1>Quiz : {question}</h1>
            
            <div className='m-2 '>
            <form className='bg-neutral-300 p-3'>
                <div className='border-2 rounded p-2 m-2'>
                <input type="radio" id={id} name={answers} value={options[0]} onChange={handelFormValve} onClick={notify} onClick={handleClick} disabled={isDisabled}/>
                <label for={id}>{options[0]}</label>
                </div>
                <div className='border-2 rounded p-2 m-2'>
                <input type="radio" id="css" name={answers} value={options[1]} onChange={handelFormValve} onClick={notify} onClick={handleClick} disabled={isDisabled}/>
                <label for="css">{options[1]}</label>
                </div>
                <div className='border-2 rounded p-2 m-2'>
                <input type="radio" id="javascript" name={answers} value={options[2]} onChange={handelFormValve} onClick={notify} onClick={handleClick} disabled={isDisabled}/>
                <label for="javascript">{options[2]}</label>
                </div>
                <div className='border-2 rounded p-2 m-2'>
                <input type="radio" id="javascript" name={answers}value={options[3]} onChange={handelFormValve} onClick={notify} onClick={handleClick} disabled={isDisabled}/>
                <label for="javascript">{options[3]}</label>
                </div>
               
        </form>
            </div>
            <ToastContainer position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        </div>
        </div>
    );
};

export default QuizDetails;