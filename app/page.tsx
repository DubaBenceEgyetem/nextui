'use client'
import Login from './Components/Login_Registration'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Navbar  from './Components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Login/>  
      </>
  );
}
`x`