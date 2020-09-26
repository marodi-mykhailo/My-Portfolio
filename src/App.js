import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MyInfo from "./Components/MyInfo/MyInfo";
import MySkills from "./Components/MySkills/MySkills";

function App() {
    return (
        <div className="App">
            <Header/>
            <MyInfo/>
            <MySkills/>
        </div>
    );
}

export default App;
