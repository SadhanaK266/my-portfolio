import React from 'react'
import './Projects.scss'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Timer10Icon from '@mui/icons-material/Timer10';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import QrCodeIcon from '@mui/icons-material/QrCode';
import WatchIcon from '@mui/icons-material/Watch';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FormatShapesIcon from '@mui/icons-material/FormatShapes';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Projects = () => {
    return (
        <>
            <div className="projectTitle">
                <h1>Projects</h1>
            </div>

            <div className="projects">
                <div className="project__container">
                    <a className="content" href='https://github.com/SadhanaK266/ATM_Machine'>
                        <div className='divOne'>
                            <div className="left">
                                <AccountBalanceIcon />
                            </div>
                            <div className="right">
                                <h4>ATM Management System</h4>
                            </div>
                        </div>
                        <div className="right-corner">
                            <MoreVertIcon />
                        </div>
                    </a>
                    <a className="content" href='https://github.com/SadhanaK266/Pizza-Bill-Generator'>
                        <div className='divOne'>
                            <div className="left">
                                <LocalPizzaIcon />
                            </div>
                            <div className="right">
                                <h4>Pizza-Bill Generator</h4>
                            </div>
                        </div>
                        <div className="right-corner">
                            <MoreVertIcon />
                        </div>
                    </a>
                    <a className="content" href='https://github.com/SadhanaK266/Weather-App'>
                        <div className='divOne'>
                            <div className="left">
                                <WbSunnyIcon />
                            </div>
                            <div className="right">
                                <h4>Weather App</h4>
                            </div>
                        </div>
                        <div className="right-corner">
                            <MoreVertIcon />
                        </div>
                    </a>
                    <a className="content" href='https://github.com/SadhanaK266/Digital-Clock'>
                        <div className='divOne'>
                            <div className="left">
                                <Timer10Icon />
                            </div>
                            <div className="right">
                                <h4>Digital Clock</h4>
                            </div>
                        </div>
                        <div className="right-corner">
                            <MoreVertIcon />
                        </div>
                    </a>
                    <a className="content" href='https://sadhanafoodcartapp.netlify.app/'>
                        <div className='divOne'>
                            <div className="left">
                                <FoodBankIcon />
                            </div>
                            <div className="right">
                                <h4>Food-Cart App</h4>
                            </div>
                        </div>
                        <div className="right-corner">
                            <MoreVertIcon />
                        </div>
                    </a>
                    <a className="content" href='https://sadhuqrcodegenerator.netlify.app/'>
                        <div className='divOne'>
                            <div className="left">
                                <QrCodeIcon/>
                            </div>
                            <div className="right">
                                <h4>QR Code Generator</h4>
                            </div>
                        </div>
                        <div className="right-corner">
                            <MoreVertIcon />
                        </div>
                    </a>
                    <a className="content" href='https://sadhanastopwatch.netlify.app/'>
                        <div className='divOne'>
                            <div className="left">
                                <WatchIcon />
                            </div>
                            <div className="right">
                                <h4>Stopwatch</h4>
                            </div>
                        </div>
                        <div className="right-corner">
                            <MoreVertIcon />
                        </div>
                    </a>
                    <a className="content" href='https://sadhanastickynotes.netlify.app/'>
                        <div className='divOne'>
                            <div className="left">
                                <EditNoteIcon />
                            </div>
                            <div className="right">
                                <h4>Sticky Notes</h4>
                            </div>
                        </div>
                        <div className="right-corner">
                            <MoreVertIcon />
                        </div>
                    </a>
                    <a className="content" href='https://sadhucssgenerator.netlify.app/'>
                        <div className='divOne'>
                            <div className="left">
                                <FormatShapesIcon />
                            </div>
                            <div className="right">
                                <h4>CSS Generator</h4>
                            </div>
                        </div>
                        <div className="right-corner">
                            <MoreVertIcon />
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
