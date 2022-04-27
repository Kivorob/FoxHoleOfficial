import React from 'react';
import './App.css';
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Pages/Main/Main";

function App() {
  return (
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
