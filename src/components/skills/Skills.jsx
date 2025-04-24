import React from 'react';
import './Skills.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Grid, Paper, Box } from '@mui/material';

// Icons
import { FaJava, FaReact, FaHtml5, FaPython, FaGitSquare, FaGithubSquare } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import { SiEclipseide } from "react-icons/si";
import { PiFigmaLogoBold } from "react-icons/pi";
import { VscVscode } from "react-icons/vsc";
import { SiGooglecolab } from "react-icons/si";


const languagesFrameworks = [
    { name: "Java", icon: <FaJava style={{ color: "white" }} /> },
    { name: "React.js", icon: <FaReact style={{ color: "white" }} /> },
    { name: "HTML", icon: <FaHtml5 style={{ color: "white" }} /> },
    { name: "CSS", icon: <IoLogoCss3 style={{ color: "white" }} /> },
    { name: "JavaScript", icon: <DiJavascript style={{ color: "white" }} /> },
    { name: "Python", icon: <FaPython style={{ color: "white" }} /> },
];

const tools = [
    { name: "Git", icon: <FaGitSquare style={{ color: "white" }} /> },
    { name: "GitHub", icon: <FaGithubSquare style={{ color: "white" }} /> },
    { name: "Google Colab", icon: <SiGooglecolab style={{ color: "white" }} /> },
    { name: "Figma", icon: <PiFigmaLogoBold style={{ color: "white" }} /> },
    { name: "VS Code", icon: <VscVscode style={{ color: "white" }} /> },
    { name: "Eclipse", icon: <SiEclipseide style={{ color: "white" }} /> },
];

const SkillGrid = ({ items }) => (
    <Grid container spacing={3} justifyContent="center">
        {items.map((item, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
                <Paper elevation={3} className="skill-card">
                    <Box className="skill-icon">{item.icon}</Box>
                    <Typography className="skill-text">{item.name}</Typography>
                </Paper>
            </Grid>
        ))}
    </Grid>
);

export const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-title">
                <h1>Skills</h1>
            </div>

            <Accordion className="custom-accordion">
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon sx={{ color: 'white' }} />}
                >
                    <Typography className="accordion-title">Languages and Frameworks</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SkillGrid items={languagesFrameworks} />
                </AccordionDetails>
            </Accordion>

            <Accordion className="custom-accordion">
                <AccordionSummary sx={{borderRadius:'10px'}}
                    expandIcon={<ArrowDropDownIcon sx={{ color: 'white' }} />}
                >
                    <Typography className="accordion-title">Tools</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SkillGrid items={tools} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
};
