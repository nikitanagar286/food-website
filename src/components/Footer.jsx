import React from 'react'
// import logo from "../asset/f-logo.png"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">


            <div className="footer-content-left">
                <h2>All about Information</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ex quae, vel inventore fugiat eligendi neque rem tempore alias aliquam vero vitae dolor hic dolores ipsam in eum pariatur incidunt?</p>
                <div className="footer-social-icons">
                    <LinkedInIcon/>
                    <InstagramIcon/>
                    <TwitterIcon/>
                    <FacebookIcon/>
                </div>


            </div>

<div className="footer-content-center">


    <h2>COMPHANY</h2>
    <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>privacy policy</li>
    </ul>
</div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91  xxxx-xxx-xxxxx  </li>
        <li>
            wwww@gmail.com
            </li>       </ul>
            
            

            </div>

            
        </div>
        <hr/>

        <p className="footer-copyright">

Copyright 2024 © food delivery.com - All right revesed
</p>
  

    </div>
  )
}

export default Footer