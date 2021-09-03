import React from 'react';
import { useLocation } from 'react-router-dom'
import SessionLink from './SessionLink';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavElements';

const Navbar = () => {
  const location = useLocation()
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1 style={{fontSize:'3rem', fontWeight: '900'}}>Shigoto</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/jobs' activeStyle>
            Jobs
          </NavLink>
          <NavLink to='/chart' activeStyle>
            Chart
          </NavLink>
          {/* Second Nav */}
          <NavBtn>
            <NavBtnLink to='/jobs-form'>Add Job</NavBtnLink>
          </NavBtn>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;