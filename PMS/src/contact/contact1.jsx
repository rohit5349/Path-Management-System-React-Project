import React , {useState} from 'react'
import Footer from '../assets/component/Footer/FooterPage.jsx';
import Contact from './contact.jsx';
import Drawer from '../assets/Navigation/Drawer.jsx';
import Navbar from '../assets/Navigation/Navbar.jsx';
import styled from 'styled-components';

const contact1 = () => {
    const [isOpen , setIsOpen] = useState(false);
    const toggleDrawer = ()=>{
        setIsOpen(!isOpen);
     };
  return (
        <>
          <Drawer isOpen = {isOpen} toggleDrawer = {toggleDrawer}/>
          <Navbar toggleDrawer = {toggleDrawer}/>
          <Contact/>
          <Footer/>
        </>
  );
};

export default contact1
