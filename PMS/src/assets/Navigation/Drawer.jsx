import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import {routes} from "../../constant.js";
import { useNavigate } from 'react-router-dom';

const Drawer = ({isOpen , toggleDrawer}) => {
    const navigate = useNavigate();
  return (
     <>
       {isOpen &&  <Backdrop onClick={toggleDrawer}/>}
       <SDrawer isOpen = {isOpen}>
       <SNavbarBrand>
         <LogoImage src="/images/map.png" alt="Map Logo" />
       </SNavbarBrand>
          <RightNav>
             <NavRoutes onClick={toggleDrawer}>
                {routes.map((route) =>(
                   <NavRoute to = {route.link} key={route.name}>
                       {route.name}
                   </NavRoute>
                ))}
             </NavRoutes>
             <LoginButton onClick={()=>navigate('/login')}>Login</LoginButton>
          </RightNav>
       </SDrawer>
     </>
  );
};

export default Drawer;

const SNavbarBrand = styled.h2``;

const LogoImage = styled.img`
    width : 80px;
    height : 80px;
    object-fit : contain;
`;


const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;

  background-color: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 60%;
  background-color: white;
  transition: 0.3s ease;

  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;
const NavRoutes = styled.div``;
const NavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 2.5rem;
  padding: 0.5rem;
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;
  align-self: flex-start;
  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  }
`;