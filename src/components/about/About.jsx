import React from 'react';
import './About.scss';
import image2 from '../images/image2.png';
import Button from '@mui/material/Button';
import { saveAs } from 'file-saver';
import resume from '../resume/Resume_082125.pdf';
import SchoolIcon from '@mui/icons-material/School';
export const About = () => {
  const download = async () => {
    saveAs(resume, "Resume_Sadhana_K.pdf");
  };

  return (
    <>
      <div className="aboutTitle">
        <h1>About</h1>
      </div>

      <div className="about-Home">
        <div className='home__left'>
          <img src={image2} alt="image2" className='home__image' />
        </div>
        <div className='home__right'>
          <h1>Hi, I'm Sadhana K</h1>
          <h2>Web Developer & Tech Enthusiast</h2>
          <p>
            I'm a B.Tech IT student and Junior Web Developer with hands-on experience in building responsive, user-friendly web applications using React.js, Java, and modern web technologies. Proficient in frontend development, database management (MySQL, MongoDB), and tools like Figma and GitHub, as well as libraries such as Material UI (MUI), I have a strong grasp of clean code practices and performance optimization. Through practical internships and continuous learning, I apply problem-solving, design thinking, and technical expertise to deliver scalable, real-world digital solutions. Passionate about technology and innovation, I'm always seeking opportunities to grow and make meaningful contributions.
          </p>
          <div className="download-btn">
            <Button onClick={download} variant="contained" size="medium" sx={{ background: "rgb(200, 0, 200)", width: '100%' }}>
              Download CV
            </Button>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="about__content">
          <div className="content">
            <div className="top">
              
              <h2>B.Tech IT<SchoolIcon sx={{color:'white',marginLeft:'8px',}}/></h2>
              <h4>2022 – 2026</h4>
            </div>
            <div className="bottom">
              <p>KPR Institute of Engineering and Technology</p>
              <span>Coimbatore</span>
            </div>
            <p>CGPA: <span>8.2</span></p>
          </div>

          <div className="content">
            <div className="top">
              <h2>HSC <SchoolIcon sx={{color:'white',marginLeft:'8px',}}/></h2>
              <h4>2021 – 2022</h4>
            </div>
            <div className="bottom">
              <p>Thiru Janarthana Matriculation Higher Secondary School</p>
              <span>Tirupur</span>
            </div>
            <p>Percentage: <span>86.5</span></p>
          </div>

          <div className="content">
            <div className="top">
              <h2>SSLC<SchoolIcon sx={{color:'white',marginLeft:'8px',}}/></h2>
              <h4>2019 – 2020</h4>
            </div>
            <div className="bottom">
              <p>Thiru Janarthana Matriculation Higher Secondary School</p>
              <span>Tirupur</span>
            </div>
            <p>Percentage: <span>76.6</span></p>
          </div>
        </div>

        <div className="about__details">
          <div className="detail">
            <h1>10+</h1>
            <h3>Projects</h3>
          </div>

          <div className="detail">
            <h1>3</h1>
            <h3>Internships</h3>
          </div>
        </div>
      </div>
    </>
  );
};
