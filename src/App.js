import React from 'react';
import logo from './logo.svg';
import './App.css';
import login from './components/login';

function App() {
  const l = new login()
  return (
    l.render()
  );

}

export default App;
