import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavContainer } from './styles';

const Nav = () => {
  return (
    <NavContainer>
      <NavLink exact to="/">All Smurfs</NavLink>
      <NavLink to="/smurf-form">Add Smurf</NavLink>
    </NavContainer>
  );
};

export default Nav;
