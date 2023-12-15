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
      <div className="min-h-screen flex flex-wrap content-between bg-gradient-to-b from-blue-800 via-blue-500 to-blue-700 text-white ">
        <div className="w-full flex flex-grow flex-wrap">
          <Header />
          <main className="p-4 flex-grow px-10">
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
          <footer className="py-10 bg-gradient-to-r from-red to-light-blue border border-t-2 border-t-black fixed bottom-2">
            <div className="mx-auto max-w-7xl px-4">
              <Footer/>
            </div>
          </footer>
        </div>
    </div>
)
}

export default App
