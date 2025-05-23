import React , {useState} from 'react'
import Footer from '../assets/component/Footer/FooterPage.jsx';
import Login from './Login.jsx';
import Drawer from '../assets/Navigation/Drawer.jsx';
import Navbar from '../assets/Navigation/Navbar.jsx';


const Login1 = () => {
    const [isOpen , setIsOpen] = useState(false);
    const toggleDrawer = ()=>{
        setIsOpen(!isOpen);
     };
  return (
        <>
          <Drawer isOpen = {isOpen} toggleDrawer = {toggleDrawer}/>
          <Navbar toggleDrawer = {toggleDrawer}/>
          <Login/>
          <Footer/>
        </>
  );
};

export default Login1;
