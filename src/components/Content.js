import React from 'react';
import ImageOne from '../Images/first.jpeg';
import ImageTwo from '../Images/second.jpeg';

const Content = () => {
    return (
        <>
        <div className='menu-card'>
            <img src= {ImageOne} alt='dog' className='h-full rounded mb-20 shadow'/>
             <div className='center-content'>
               <h2 className='text-2xl mb-2'>Getting a dog is like getting a child.</h2>
             </div>
        </div>
        <div className='menu-card'>
            <img src= {ImageTwo} alt='dog' className='h-full rounded mb-20 shadow'/>
             <div className='center-content' >
               <h2 className='text-2xl mb-2'>Dogs are your bestfriends.</h2>
             </div>
        </div>
        </>
    );
};

export default Content
