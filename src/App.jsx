import React, {useState, useEffect} from "react"
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import {Footer, Header} from './components'
import {Outlet} from 'react-router-dom'

function App() {
  
  //making loading state to check and update the login status of user
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();//for updating login/logout status in our authSlice in store

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData)
        dispatch(login(userData));
      else{
        dispatch(logout());
      }
    })
    .finally(()=>{
      setLoading(false);
    })
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-800 via-blue-500 to-blue-700 text-white">
      <Header />
      <main className="flex-grow p-4 px-8">
        {loading ? (
          <div className="animate-pulse">
            <div className="bg-red-300 h-4 w-1/3 mb-4"></div>
            <div className="bg-red-400 h-4 w-1/2 mb-4"></div>
            <div className="bg-red-500 h-4 w-3/4 mb-4"></div>
            <div className="bg-red-600 h-4 w-5/6 mb-4"></div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <footer className="py-8 bg-gradient-to-r from-red to-light-blue border-t-2 border-t-black">
        <div className="mx-auto max-w-7xl ">
          <Footer />
        </div>
      </footer>
    </div>
  );
  
}

export default App
