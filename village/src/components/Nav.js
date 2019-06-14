import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">All Smurfs</NavLink>
      <NavLink to="/smurf-form">Add Smurfs</NavLink>
    </nav>
  );
};

export default Nav;
