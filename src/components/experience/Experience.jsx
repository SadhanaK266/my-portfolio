import React from 'react'
import './Experience.scss';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';


export const Experience = () => {
    return (
        <experience>
            <div className="experienceTitle">
                <h1>Experience</h1>
            </div>
            <div className="box-Container">
            <Timeline >
                <TimelineItem sx={{right:'20%',
                    '@media (max-width:768px)':{
                        right:'30%'
                    }
                }}>
                    <TimelineSeparator>
                        {/* <WorkHistoryIcon sx={{margin:'8%'}} /> */}
                        <TimelineDot  />
                        <TimelineConnector sx={{height:'100px'}}/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography className='companyName' variant="h5" sx={{ fontFamily: 'Montserrat',marginBottom:'2%', fontWeight: 'bold', color: 'rgb(200,0,200)' ,
                            '@media (max-width:768px)':{
                                fontSize:'19px'
                            }
                        }}>
                            Thulir, Singapore (Intern)
                        </Typography>
                        <Typography variant="p" sx={{ fontFamily: 'Montserrat',fontWeight:'bold', color: 'white',
                            '@media (max-width:768px)':{
                                fontSize:'15px'
                            }
                         }}>
                            Junior Web Developer
                        </Typography>
                        <Typography variant="h6" sx={{ fontFamily: 'Montserrat',fontSize:'13px', color: 'white',
                            '@media (max-width:768px)':{
                                fontSize:'11px'
                            }
                         }}>
                            ( Jul 2024 - Aug 2024 )
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem sx={{right:'20%'}}>
                    <TimelineSeparator>
                        <TimelineDot  />
                        <TimelineConnector sx={{height:'100px'}} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography className='companyName' variant="h5" sx={{ fontFamily: 'Montserrat',marginBottom:'2%', fontWeight: 'bold', color: 'rgb(200,0,200)',
                            '@media (max-width:768px)':{
                                fontSize:'19px'
                            }
                         }}>
                            Squash Apps Private Limited, India (Intern)
                        </Typography>
                        <Typography variant="p" sx={{fontFamily: 'Montserrat',fontWeight:'bold', color: 'white',
                            '@media (max-width:768px)':{
                                fontSize:'15px'
                            }
                        }}>
                            Web Developer
                        </Typography>
                        <Typography variant="h6" sx={{ fontFamily: 'Montserrat',fontSize:'13px', color: 'white' ,
                            '@media (max-width:768px)':{
                                fontSize:'11px'
                            }
                        }}>
                            ( Jan 2024 - Feb 2024 )
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem sx={{right:'20%'}}>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector sx={{height:'100px'}} />
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography className='companyName' variant="h5" sx={{ fontFamily: 'Montserrat',marginBottom:'2%', fontWeight: 'bold', color: 'rgb(200,0,200)',
                            '@media (max-width:768px)':{
                                fontSize:'19px'
                            }
                         }}>
                            Squash Apps Private Limited, India (Intern)
                        </Typography>
                        <Typography variant="p" sx={{fontFamily: 'Montserrat',fontWeight:'bold', color: 'white',
                            '@media (max-width:768px)':{
                                fontSize:'15px'
                            }
                         }}>
                            Web Developer
                        </Typography>
                        <Typography variant="h6" sx={{ fontFamily: 'Montserrat',fontSize:'13px', color: 'white',
                            '@media (max-width:768px)':{
                                fontSize:'11px'
                            }
                         }}>
                            ( Aug 2023 - Sep 2023 )
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
            </div>
            </experience>
    )
}
