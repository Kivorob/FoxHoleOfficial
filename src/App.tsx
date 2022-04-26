import React from 'react';
import './App.css';
import HeaderLine from "./components/Layout/Header/HeaderLine/HeaderLine";
import AuthLine from "./components/Layout/Header/AuthLine/AuthLine";
import Footer from "./components/Layout/Footer/Footer";
import Search from "./components/Layout/Header/Search/Search";

function App() {
  return (
    <div>
        <HeaderLine/>
        <AuthLine/>
        <Search/>
        <Footer/>
    </div>
  );
}

export default App;
