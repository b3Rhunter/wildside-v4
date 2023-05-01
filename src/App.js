import React, { useState } from 'react';
import { GiSpellBook, GiShoppingBag, GiConversation } from "react-icons/gi";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Shopping from './components/Shopping';


function App() {
  const [showApptText, setShowApptText] = useState(false);
  const [showShoppingText, setShowShoppingText] = useState(false);
  const [showContactText, setShowContactText] = useState(false);

  const handleApptMouseEnterLeave = () => {
    setShowApptText(!showApptText);
  };

  const handleShoppingMouseEnterLeave = () => {
    setShowShoppingText(!showShoppingText);
  };

  const handleContactMouseEnterLeave = () => {
    setShowContactText(!showContactText);
  };

  return (
    <BrowserRouter>
      <div className='background'>
        <div className='backgroundImg'></div>
        <div className='logo'></div>
        <a href='http://thewildside.mylocalsalon.com/OnlineBooking/' target='_blank' rel="noreferrer">
        <div
          className='appt'
          onMouseEnter={handleApptMouseEnterLeave}
          onMouseLeave={handleApptMouseEnterLeave}
        >
          
          <div className='icon-wrapper'>
            <GiSpellBook />
          </div>
          
        </div>
        </a>
        <div className={`apptText ${showApptText ? 'show' : ''}`}>BOOKINGS</div>
        <Link to='/shopping'>
        <div
          className='shopping'
          onMouseEnter={handleShoppingMouseEnterLeave}
          onMouseLeave={handleShoppingMouseEnterLeave}
        >
          
            <div className='icon-wrapper'>
              <GiShoppingBag />
            </div>
          
        </div>
        </Link>
        <div className={`shoppingText ${showShoppingText ? 'show' : ''}`}>SHOPPING</div>
        <Link to='/contact'>
        <div
          className='contact'
          onMouseEnter={handleContactMouseEnterLeave}
          onMouseLeave={handleContactMouseEnterLeave}
        >
          
            <div className='icon-wrapper'>
              <GiConversation />
            </div>
          
        </div>
        </Link>
        <div className={`contactText ${showContactText ? 'show' : ''}`}>CONTACT</div>
      </div>
      <div className='routes-wrapper'>
      <Routes>
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
