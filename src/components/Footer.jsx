import React from "react"

export default function Footer(){
    return(
        <footer id="footer">
            <div className="footer--info">
                <h5> All rights reserved. This is made for ©MemeWizz.</h5>
                <h5>-- Developed by: <a href="mailto:adityarastogi.in@gmail.com" className="mail">Aditya Rastogi</a> --</h5>    
            </div> 
            <div className="footer--contact">
                <a target="_blank" href="https://www.linkedin.com/in/aditya-rastogi-944b2028a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="../images/linkedin.png" alt="linked_in" /></a>
                <a target="_blank" href="tel:+91-9643479479"><img src="../images/contact.png" alt="contact" /></a>
            </div>
        </footer>
    )
}