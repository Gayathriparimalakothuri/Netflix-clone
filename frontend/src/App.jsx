import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, Route,Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Footer from './components/Footer';
import WatchPage from "./pages/WatchPage";
import SearchPage from "./pages/SearchPage";
import SearchHistoryPage from "./pages/SearchHistory";
import NotFoundPage from "./pages/404";
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './store/authUSer';
import {Loader} from "lucide-react"

function App() {
 const {user,isCheckingAuth,authCheck} = useAuthStore()
  console.log('userauth',user,isCheckingAuth,)

  useEffect(()=>{
    authCheck()
  },[authCheck]);

  if(isCheckingAuth){
    return(
      <div className='sectionHeight'>
        <div className='d-flex justify-content-center align-items-center bg-black h-100'>
        <Loader className='animate-spin text-danger size-10'/>
        </div>
      </div>
    )
  }
  return (
    <>
     <Routes>
      <Route path ="/" element={<HomePage/>} />
      <Route path ="/login" element={ !user ? <LoginPage /> : <Navigate to={"/"} />}/>
      <Route path ="/signup" element={ !user ? <SignupPage/> : <Navigate to={"/"}/>} />
      <Route path='/watch/:id' element={user ? <WatchPage /> : <Navigate to={"/login"} />} />
				<Route path='/search' element={user ? <SearchPage /> : <Navigate to={"/login"} />} />
				<Route path='/history' element={user ? <SearchHistoryPage /> : <Navigate to={"/login"} />} />
				<Route path='/*' element={<NotFoundPage />} />
    </Routes>
    <Toaster/>
    <Footer/>
    </>
   
  )
}

export default App
