import React from 'react';
import { Link } from "gatsby"
import './Navbar.scss';

const activeStyle = { 
    textDecoration:"underline 2px", 
    textUnderlinePosition: "under"
}

export default function Navbar ({children}){
    return (
        <React.Fragment>
        <div className="navbar">
            <Link activeStyle={activeStyle} className = "navbar--link" to="/" >About Me</Link>
            <Link activeStyle={activeStyle} className = "navbar--link" to="/portfolio/portfolio">Portfolio</Link>
            <Link activeStyle={activeStyle} className = "navbar--link" to="/contact/contact">Contact Me</Link>
            <Link activeStyle={activeStyle} className = "navbar--link" to="/blog/blog">Blog</Link>
        </div>
        {children}
        </React.Fragment>
    );
}