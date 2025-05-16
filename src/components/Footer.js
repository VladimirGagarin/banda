import  React from 'react';
import { FaFacebook,FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import '../App.css';
import confetti from 'canvas-confetti';


const Footer = () => {
    const  socialsmedias = [
        {socialName:"Facebook", iconImg: "/images/fb.png", faIcon: <FaFacebook/>, messageText:"", links:"", socialTag:"Get our story on"},
        {socialName:"Instagram", iconImg: "/images/instagram.png", faIcon: <FaInstagram/>, messageText:"", links:"", socialTag:"Get our post on"},
        {socialName:"Email", iconImg: "/images/instagram.png", faIcon: <FaEnvelope/>, messageText:"", links:"", socialTag:"Get our notifications through"},
        {socialName:"WhatsApp", iconImg: "/images/whatsapp.png", faIcon: <FaWhatsapp/>, messageText:"", links:"", socialTag:"Get instant update on"},


    ]

     const fireConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 150,
            origin: { y: 0.6 },
            colors: ['#ffb3c6', '#ffc6ec', '#e0bbe4', '#f3c5ff']
        });
    };
    return(
        <div className='footer-content'>
            <h1>We've Got You!</h1>
            <div className='social-icons'>
                {socialsmedias.map(media => (
                    <div className='media-card'>
                        <h2>{media.faIcon} {media.socialName}</h2>
                        <div className='media-image'>
                            <img src={media.iconImg} alt='socials'/>
                        </div>
                         <div className='media-content'>
                            <p>{media.messageText}</p>
                            <button onClick={fireConfetti}>{media.socialTag} {media.socialName}</button>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer