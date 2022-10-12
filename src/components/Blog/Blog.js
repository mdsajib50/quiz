import React from 'react';

const Blog = () => {
   
    return (
        <div>
            
            <div className='bg-slate-300 w-1/2 mt-4 p-4 lg:mx-72 sm:mx-10'>
                <h1 className='text-xl font-bold'>What is the purpose of React-Router?</h1>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='bg-slate-300 w-1/2 mt-4 p-4 lg:mx-72 sm:mx-10'>
                <h1 className='text-xl font-bold'>How does context API works?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='bg-slate-300 w-1/2 mt-4 p-4 lg:mx-72 sm:mx-10'>
                <h1 className='text-xl font-bold'>Describe useRef hooks.</h1>
                <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.The useRef returns a mutable ref object.</p>
            </div>
        </div>
    );
};

export default Blog;