import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Main from './components/Main';
import Footer from './components/Footer';
import Ctas from './components/Ctas';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Main/>
      <Ctas/>
      <Footer/>
    </div>
  );
}

export default App;
