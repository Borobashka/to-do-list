import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
      <Sidebar />
      </div>
    </div>
  );
}

export default App;
