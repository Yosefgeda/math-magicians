import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-bar">
    <li>
      <Link to="/"><h2 className="logo">Math Magicians</h2></Link>
    </li>
    <ul className="nav-list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
