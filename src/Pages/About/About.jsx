import React from 'react';
import Header from '../../components/Header/Header';
import './About.scss';
import { FaGithub } from 'react-icons/fa';
const About = () => {
  return (
    <>
      <Header />
      <div className="about-wrapper">
        <h1 className="about-title">About This Application</h1>
        <h2>
          Simple react app that calls the DOG CEO API to display images of dogs
          you enter 😀 🐶
        </h2>
        <h3 className="small">Link to code below:</h3>
        <a
          href="https://github.com/luke-h1/dog-image-app-react"
          className="project-link"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="project-github" />
        </a>
      </div>
    </>
  );
};
export default About;
