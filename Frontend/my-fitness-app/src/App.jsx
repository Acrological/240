import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React  from 'react';
import { Landing, Records, Workouts,Exercises } from './pages';
import { AppNav } from './features';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //comment
  return (
    <>
    <BrowserRouter>
    <AppNav />
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/workouts/*" element={<Workouts/>} />
    <Route path="/records" element={<Records/>} />
    <Route path="/exercises" element={<Exercises/>} />
    </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;
