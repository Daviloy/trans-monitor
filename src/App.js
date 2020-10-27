import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="app__content">
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
};

export default App;
