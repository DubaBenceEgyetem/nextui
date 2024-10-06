'use client'
import Login_Registration from './Components/Login_Registration'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar';
import { DarkMode } from './Components/DarkMode';
import Chart from './Components/Chart';
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from 'react';
import Sections from './Components/Sections';


export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Visszaállít a tetejére
  }, []); 
    

  const [theme, setTheme] =useState<'light' | 'dark'| 'system' >('light')
  const handleThemeChange = (theme: 'light' | 'dark' | 'system') => {
    if (theme === 'dark') {
      setTheme('light')
    }
    
    else if(theme === "light") {
      setTheme('dark')
    }
    else setTheme('system')
  };

  return (
    <>
      <Navbar/>
      <DarkMode onThemeChange={handleThemeChange}/>
      <Login_Registration />
      {/* <Chart /> */}
      <Sections />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme={theme}
      />
    </>
  );
}
