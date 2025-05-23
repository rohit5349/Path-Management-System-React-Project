import React , {useState} from 'react'
import Drawer from '../assets/Navigation/Drawer';
import Navbar from '../assets/Navigation/Navbar';
import Result from './Result';
import Footer from '../assets/component/Footer/FooterPage.jsx';

const Result1 = () => {
    const [isOpen , setIsOpen] = useState(false);
    const toggleDrawer = ()=>{
         setIsOpen(!isOpen);
    };
    
  return (
    <>
     <Drawer isOpen = {isOpen} toggleDrawer = {toggleDrawer}/>
     <Navbar toggleDrawer = {toggleDrawer}/>
     <Result/>
     <Footer/>
    </>
  );
};

export default Result1