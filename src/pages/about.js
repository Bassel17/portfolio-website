import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Navbar from '../components/navbar/Navbar.js';
import AboutCard from '../components/aboutCard/AboutCard';
import Img from "gatsby-image";
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-cib/github';
import instagramIcon from '@iconify/icons-cib/instagram';
import linkedinIcon from '@iconify/icons-cib/linkedin-in';
import twitterIcon from '@iconify/icons-cib/twitter';
import './style/about.scss'

const About = () => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: {eq: "portfolio-picture.jpg"}) {
            childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
            }
        }
    }`)
    return (
    <Navbar>
        <div className="about">
            <Img
                className="about--portfolio-image"
                fluid={data.file.childImageSharp.fluid}
                alt="Image Of Me"
            />
            <div className="about--info">
                <h1>Bassel Kanso</h1>
                <AboutCard/>
                <div className="about--info--footer">
                    <a href="https://www.instagram.com/bassel_k/" target="_blank" rel="noreferrer"><Icon icon={instagramIcon} /></a>
                    <a href="https://www.linkedin.com/in/bassel-kanso-937649128/" target="_blank" rel="noreferrer"><Icon icon={linkedinIcon} /></a>
                    <a href="https://www.github.com/bassel17/" target="_blank" rel="noreferrer"><Icon icon={githubIcon} /></a>
                    <a href="https://www.github.com/bassel17/" target="_blank" rel="noreferrer"><Icon icon={twitterIcon} /></a>
                </div>
            </div>
        </div>
    </Navbar>
    )
}

export default About;