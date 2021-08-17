import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1>Shigoto</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/jobs' activeStyle>
            Jobs
          </NavLink>
          <NavLink to='/jobs-form' activeStyle>
            Add Job
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;