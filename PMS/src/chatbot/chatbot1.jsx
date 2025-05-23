import React, {useState} from 'react'
import Navbar from '../assets/Navigation/Navbar';
import Drawer from '../assets/Navigation/Drawer';
import Chatbot from './chatbot';
import Footer from '../assets/component/Footer/FooterPage.jsx';

const chatbot1 = () => {
    const [isOpen , setIsOpen] = useState(false);
    const toggleDrawer = ()=>{
         setIsOpen(!isOpen);
    };

  return (
    <>
      <Drawer isOpen = {isOpen} toggleDrawer = {toggleDrawer}/>
      <Navbar toggleDrawer = {toggleDrawer}/>
      <Chatbot/>
      <Footer/>
    </>
  );
};

export default chatbot1