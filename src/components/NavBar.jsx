import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaPhone, FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa"; 
import logo from "../assets/Ticket.png"

const NavBar = () => {

    const activeStyle = {
        backgroundColor: "#800000", 
        color: "#f3e6cd",
        borderRadius: "5px" 
      };

  return (
    <nav className="sidebar">
      <img src={logo} className="logo"/>
      <ul>
        <li>
          <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : null)} ><FaHome className="icon" /> Home</NavLink>
        </li>
        <li>
          <NavLink to="/events" style={({isActive}) => (isActive ? activeStyle : null )}><FaCalendarAlt className="icon" /> Events</NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={({isActive}) => (isActive ? activeStyle : null)}><FaPhone className="icon" /> Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/booking" style={({isActive}) => (isActive ? activeStyle : null)}><FaShoppingCart className="icon" /> Booking</NavLink>
        </li>
        <li>
          <NavLink to="/profile" style={({isActive}) => (isActive ? activeStyle : null)}><FaUser className="icon" /> Profile</NavLink>
        </li>
        <li>
          <NavLink to="/logout" style={({isActive}) => (isActive ? activeStyle : null)}><FaSignOutAlt className="icon" /> Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
