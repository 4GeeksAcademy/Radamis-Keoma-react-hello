import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import NavBar from './components/NavBar';
import JumBotron from './components/JumBotron';
import FooterBar from './components/FooterBar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <div className='container'>
    <JumBotron/>
    <Home/>
    </div>
    <FooterBar/>
  </React.StrictMode>,
)
