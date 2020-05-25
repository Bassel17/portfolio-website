import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Navbar from '../../components/navbar/Navbar.js';
import AboutCard from '../../components/aboutCard/AboutCard';
import Img from "gatsby-image"
import './about.scss'

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
                    <div>instagram</div>
                    <div>linkedin</div>
                    <div>github</div>
                </div>
            </div>
        </div>
    </Navbar>
    )
}

export default About;