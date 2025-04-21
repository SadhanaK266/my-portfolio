import React from 'react'
import "./Home.scss"
import TopImage1 from '../images/TopImage1.jpg';
import resume from '../resume/Resume041025,.pdf';

export const Home = () => {
  const download = async () => {
    saveAs(resume, "Resume_Sadhana_K.pdf");
  }
  return (
    <>
      
      <home>
        <div className="home__img">
          <img src={TopImage1} alt="image1" />
        </div>
        <div className="home__content">
          <h1>Hi I'm Sadhana K</h1>
          <h4>Web Developer & Tech Enthusiast</h4>
            <button onClick={download} className='topContent__downloadBtn'>Download cv</button>
        </div>
      </home>
    </>
  )
}
