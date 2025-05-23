import React from 'react'
import {routes} from "../../constant.js";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Navbar = ({toggleDrawer}) => {
  const navigate = useNavigate();

  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
            <FaBars/>
        </DrawerButton>

        <SNavbarBrand>
           <LogoImage src="/images/map.png" alt="Map Logo" />
        </SNavbarBrand>
         
        <RightNav>
          <NavRoutes>
             {routes.map((route) =>(
                <NavRoute to = {route.link} key={route.name}>
                    {route.name}
                </NavRoute>
             ))}
          </NavRoutes>
          <LoginButton onClick={()=>navigate('/login')}>Login</LoginButton>
        </RightNav>

      </NavContainer>
    </SNavbar>
  );
};

export default Navbar


const DrawerButton = styled.button`
   all: unset;
   font-size: 3rem;
   display: grid;
   @media (min-width: 768px) {
     display: none;
   }
`;

const SNavbar = styled.nav`
   background-color: #6f07f6;
   overflow : hidden;
`
const NavContainer = styled.div`
   padding: 1rem;
   height: 70px;
   max-width: 1300px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   color: white;
`;

const SNavbarBrand = styled.h2``;

const LogoImage = styled.img`
    width : 80px;
    height : 80px;
    object-fit : contain;
`;


const RightNav = styled.div`
    display: flex;
    gap: 2rem;
`;

const NavRoutes = styled.div`
   @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  align-items: center;
`;

const NavRoute = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: black;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  }
`;