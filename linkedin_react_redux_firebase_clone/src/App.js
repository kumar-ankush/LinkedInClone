import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="app">
     
      {/* Header */}
      <Header />
      {/* App Body */}
          <div className="app__body">
            <SideBar name="Ankush Kumar" email="ankush-kumar@outlook.com" stat__Number="3456" stat__Post="6798"/>
            {/* Sidebar */}
            {/* Feed */}
            {/* Widgets */}
          </div>
      
    </div>
  );
}

export default App;
