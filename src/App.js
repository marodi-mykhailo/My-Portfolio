import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MyInfo from "./Components/MyInfo/MyInfo";
import MySkills from "./Components/MySkills/MySkills";
import MyWorks from "./Components/MyWorks/MyWorks";
import RemoteWork from "./Components/RemoteWork/RemoteWork";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MyInfo/>
            <MySkills/>
            <MyWorks/>
            <RemoteWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
