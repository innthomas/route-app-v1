import React from 'react';
import {FaUmbraco} from 'react-icons/fa';
import {Outlet,  NavLink } from "react-router-dom";
import HeaderContainer from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
        <div className='coyHeader'>

        <div className='coyLogo'>
            <FaUmbraco className='faUmbLogo'/>
            <h1 className='coyName'>Umbraco</h1>
        </div>
        <nav className='navContainer'>
        <NavLink      style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }} to="/route-app-v1/">Home</NavLink> 
        <NavLink      style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }} to="/route-app-v1/about">About</NavLink> 
        <NavLink      style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }} to="/route-app-v1/contact">Contact</NavLink>
      </nav>
        </div>
      <Outlet />
    </HeaderContainer>
  )
}

export default Header