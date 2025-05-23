import React , {useState} from "react";
import Navbar from './Navbar.jsx';
import {routes} from '../../constant.js';
import Drawer from './Drawer.jsx';
import BannerSlider from "./BannerSlider.jsx";

const Navigation = ()=>{
   const [isOpen , setIsOpen] = useState(false);

   const toggleDrawer = ()=>{
        setIsOpen(!isOpen);
   };

    return(
       <>
         <Drawer isOpen = {isOpen} toggleDrawer = {toggleDrawer}/>
         <Navbar toggleDrawer = {toggleDrawer}/>
         <BannerSlider/>
       </>
    );
};

export default Navigation;