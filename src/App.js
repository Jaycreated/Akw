import React, {useState, useEffect} from 'react'
import './App.css';
import "tailwindcss/tailwind.css"
import Navbar from './components/Navbar';
//import Hero from './components/Hero';
//import Content from './components/Content';
import Footer from './components/Footer';
import { Route } from 'react-router';
import Home from './Pages';
import { Switch } from 'react-router-dom'
import About from './Pages/About';
import Menu from './Pages/Menu';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] =  useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
   const hideMenu = () =>{
     if (window.innerWidth > 768 && isOpen) {
       setIsOpen(false)
       console.log('i resizeeddd')
     }
   }

   window.addEventListener('resize', hideMenu)

   return () => {
     window.removeEventListener('resize', hideMenu);
   }
  })
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/About' component={About} />
         <Route path='/Menu' component={Menu} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
