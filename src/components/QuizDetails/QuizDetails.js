import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'

const QuizDetails = ({questioned}) => {
    const {correctAnswer,question,id,options}=questioned
    
    let myString = question.split('</p>').join('')
    let myQuestion = myString.split('<p>').join('');
    
    const [formValue, setFormValue]= useState([])
    let answers =[...formValue]
   
    const notify = () => toast
    
  
      
   const handelFormValve = e =>{
        
       const value = e.target.value
       if(value === correctAnswer){
        
        toast("Answer is correct!,");
    
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
            <div className='flex space-x-6'>
            <h1>Quiz : {myQuestion}</h1>
            <button onClick={()=>alert(correctAnswer)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
</button>
            </div>
            
            <div className='m-2 '>
            <form className='bg-neutral-300 p-3'>
                <div className='border-2 rounded p-2 m-2'>
                <input type="radio" id={id} name={answers} value={options[0]} onChange={handelFormValve} onClick={notify} />
                <label for={id}>{options[0]}</label>
                </div>
                <div className='border-2 rounded p-2 m-2'>
                <input type="radio" id="css" name={answers} value={options[1]} onChange={handelFormValve} onClick={notify}/>
                <label for="css">{options[1]}</label>
                </div>
                <div className='border-2 rounded p-2 m-2'>
                <input type="radio" id="javascript" name={answers} value={options[2]} onChange={handelFormValve} onClick={notify}/>
                <label for="javascript">{options[2]}</label>
                </div>
                <div className='border-2 rounded p-2 m-2'>
                <input type="radio" id="javascript" name={answers}value={options[3]} onChange={handelFormValve} onClick={notify}/>
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