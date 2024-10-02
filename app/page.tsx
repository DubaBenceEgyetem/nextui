'use client'
import Login from './Components/Login_Registration'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Navbar  from './Components/Navbar';
import { DarkMode } from './Components/DarkMode';
import Chart from './Components/Chart';
export default function Home() {
  return (
    <>
      <DarkMode/>
      <Navbar/>
      <Login/>  
      <Chart />
      </>
  );
}
`x`