import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element:<Main></Main>, children:[

        {path:'/' , loader:async ()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
          }, element:<Home></Home>
        },

        {path:'/home', loader:async ()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
          }, element:<Home></Home>
        },

        {path:'/topics',loader:async ()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
          }, element:<Topics></Topics>},

        {path:'/statistics', element:<Statistics></Statistics>, loader:()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
        }
      },
        {path:'/blog', element:<Blog></Blog>},
        {
          path:'/quiz/:quizId',

          loader:({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          }, element:<Quiz></Quiz>
        }
      ]
    },
    {
      path:'*',element: <Error></Error>
    }
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
