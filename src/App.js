import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MyInfo from "./Components/MyInfo/MyInfo";
import MySkills from "./Components/MySkills/MySkills";
import MyWorks from "./Components/MyWorks/MyWorks";
import RemoteWork from "./Components/RemoteWork/RemoteWork";

function App() {
    return (
        <div className="App">
            <Header/>
            <MyInfo/>
            <MySkills/>
            <MyWorks/>
            <RemoteWork/>
        </div>
    );
}

export default App;
