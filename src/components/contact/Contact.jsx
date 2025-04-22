import React from 'react'
import './Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export const Contact = () => {
    return (
        <div className='contact-container'>
            <div className="contactTitle">
                <h1>Contact Me</h1>
            </div>
            <p>Passionate about crafting web solutions and solving problems — feel free to connect for tech collaborations, internships, or career opportunities.</p>
            <a href="" className='container'>
                <PhoneIcon sx={{ '@media(max-width:768px)': { fontSize: '15px' } }} />
                <div className="right">+91 - 7812824150</div>
            </a>
            <a href="" className='container'>
                <EmailIcon sx={{ '@media(max-width:768px)': { fontSize: '15px' } }} />
                <div className="right">sadhanakaruppusamy266@gmail.com</div>
            </a>

            <a href="" className='container'>
                <LocationOnIcon sx={{ '@media(max-width:768px)': { fontSize: '15px' } }} />
                <div className="right">Tirupur, India</div>
            </a>
            <a href="" className='icons'>
                <LinkedInIcon sx={{
                    marginTop: '1.5%', marginRight: '2%', fontSize: '33px', '&:hover': { color: 'rgb(200, 0, 200)' },
                    '@media(max-width:768px)': { fontSize: '20px' }
                }} />

                <GitHubIcon sx={{
                    marginTop: '1.5%', marginRight: '2%', fontSize: '33px', '&:hover': { color: 'rgb(200, 0, 200)' },
                    '@media(max-width:768px)': { fontSize: '20px' }
                }} />
            </a>

        </div>
    )
}
