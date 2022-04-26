import React from 'react';
import './App.css';
import InfoBar from "./components/Layout/Footer/InfoBar/InfoBar";
import HeaderLine from "./components/Layout/Header/HeaderLine/HeaderLine";
import AuthLine from "./components/Layout/Header/AuthLine/AuthLine";
import CopyRightLine from "./components/Layout/Footer/CopyRightLine/CopyRightLine";

function App() {
  return (
    <div>
        <HeaderLine/>
        <AuthLine/>
        <InfoBar/>
        <CopyRightLine/>
    </div>
  );
}

export default App;
