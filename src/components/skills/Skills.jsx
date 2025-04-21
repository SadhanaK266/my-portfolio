import React from 'react'
import './Skills.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const Skills = () => {
    return (

        <>
            <skills>
                <div className="skillsTitle">
                    <h1>Skills</h1>
                </div>
                {/* <div className="skills__container">
                    <div className="container1">
                        <div className="top">
                            <h2>Languages and Framework</h2>
                        </div>
                        <div className="bottom">
                            <p>Java</p>
                            <p>Python</p>
                            <p>ReactJS</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="skills__container">
                    <div className="container1">
                        <div className="top">
                            <h2>Languages and Framework</h2>
                        </div>
                        <div className="bottom">
                            <p>Java</p>
                            <p>Python</p>
                            <p>ReactJS</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                        </div>
                    </div>
                </div> */}
            </skills>
            <div >
                <Accordion sx={{
                    width:'100%',maxWidth:'500px',left:'30.5%',backgroundColor:'rgb(50,50,50)',color:'white',
                    '@media(max-width:768px)':{width:'100%',maxWidth:'250px',left:'18%'}
                }}>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon sx={{color:'white'}} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span" sx={{fontSize:'18px',fontWeight:'bold',
                            '@media(max-width:768px)':{fontSize:'15px'}
                        }}>Languages and Framework</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{marginLeft:'15%'}}>
                            <ul>
                                <li>Java</li>
                                <li>Python</li>
                                <li>ReactJS</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>SQL</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{width:'100%',maxWidth:'500px',left:'30.5%',backgroundColor:'rgb(50,50,50)',color:'white',
                    '@media(max-width:768px)':{width:'100%',maxWidth:'250px',left:'18%'}
                }}>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon sx={{color:'white'}} />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span" sx={{fontSize:'18px',fontWeight:'bold',
                            '@media(max-width:768px)':{fontSize:'15px'}
                        }}>Tools</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{marginLeft:'15%'}}>
                            <ul>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>VS Code</li>
                                <li>Figma</li>
                                <li>Canva</li>
                                <li>BitBucket</li>
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    )
}
