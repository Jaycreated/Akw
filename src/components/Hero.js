 import React from 'react';
 import cooldog from '../Images/cooldog.png';
 import { Link } from 'react-router-dom';

 const Hero = () => {
     return (
         <div className='bg-white flex flex-col justify-center items-center '>
            <img src={cooldog} className='' />
         </div>

         
     )
 }
 
 export default Hero
 