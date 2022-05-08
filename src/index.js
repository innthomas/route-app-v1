import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,  Routes, Route, } from "react-router-dom";
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './routes/Home/home';
import About from './routes/About/about';
import Contact from './routes/Contact/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
       <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact/>} />
      </Route>
        
     
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
