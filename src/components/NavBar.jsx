// external package imports
import React from "react";
import { NavLink } from "react-router-dom";
// style import
import '../styles/NavBar.css'

// NavBar class component
export default class NavBar extends React.Component {

    render() {
        // Renders links for the navbar
        return (
            <nav>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/new">
                    New Post
                </NavLink>
            </nav>
        );
    }   
}