import React from 'react';
import { Link } from "gatsby"
import './Navbar.scss';

export default function Navbar ({children}){
    return (
        <React.Fragment>
        <div className="navbar">
            <Link activeClass="navbar--link__active" className = "navbar--link" to="/" >About Me</Link>
            <Link activeClass="navbar--link__active" className = "navbar--link" to="/portfolio/portfolio">Portfolio</Link>
            <Link activeClass="navbar--link__active" className = "navbar--link" to="/contact/contact">Contact Me</Link>
            <Link activeClass="navbar--link__active" className = "navbar--link" to="/blog/blog">Blog</Link>
        </div>
        {children}
        </React.Fragment>
    );
}