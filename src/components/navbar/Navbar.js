import React from 'react';
import { Link } from "gatsby"
import './Navbar.scss';

export default function Navbar ({children}){
    return (
        <React.Fragment>
        <div className="navbar">
            <div>
                <h3>Bassel Kanso</h3>
            </div>
            <div>
                <Link activeClass="navbar--link__active" className = "navbar--link" to="/" >About Me</Link>
                <Link activeClass="navbar--link__active" className = "navbar--link" to="/portfolio">Portfolio</Link>
                <Link activeClass="navbar--link__active" className = "navbar--link" to="/contact">Contact Me</Link>
                <Link activeClass="navbar--link__active" className = "navbar--link" to="/blog">Blog</Link>
            </div>
        </div>
        {children}
        </React.Fragment>
    );
}