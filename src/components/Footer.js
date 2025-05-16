import React from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaTiktok
} from 'react-icons/fa';
import '../App.css';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';

const Footer = () => {
    const waLink = 'https://wa.me/0721527364?text=' + encodeURIComponent('Hi! I’m interested in your cakes.');

    const socialsmedias = [
        {
        socialName: 'Facebook',
        iconImg: '/images/fb.png',
        faIcon: <FaFacebook />,
        messageText: 'Follow us on Facebook to stay updated with our latest events and stories!',
        links: 'https://www.facebook.com/sherehebanda',
        socialTag: 'Get our story on'
        },
        {
        socialName: 'Instagram',
        iconImg: '/images/instagram.png',
        faIcon: <FaInstagram />,
        messageText: 'Check out our latest photos and reels on Instagram!',
        links: 'https://www.instagram.com/sherehebanda',
        socialTag: 'Get our post on'
        },
        {
        socialName: 'Email',
        iconImg: '/images/mail.png',
        faIcon: <FaEnvelope />,
        messageText: 'Subscribe to our newsletter and never miss an update!',
        links: 'mailto:info@sherehebanda.com',
        socialTag: 'Get our notifications through'
        },
        {
        socialName: 'WhatsApp',
        iconImg: '/images/whatsapp.png',
        faIcon: <FaWhatsapp />,
        messageText: 'Join our WhatsApp community for instant updates and exclusive offers!',
        links:  waLink,
        socialTag: 'Get instant update on'
        },
        {
        socialName: 'LinkedIn',
        iconImg: '/images/linkedin.png',
        faIcon: <FaLinkedin />,
        messageText: 'Connect with us professionally on LinkedIn and explore collaboration opportunities.',
        links: 'https://www.linkedin.com/company/sherehebanda',
        socialTag: 'Get our vision on'
        },
        {
        socialName: 'TikTok',
        iconImg: '/images/tiktok.png',
        faIcon: <FaTiktok />,
        messageText: 'Follow us on TikTok for fun behind-the-scenes and event highlights!',
        links: 'https://www.tiktok.com/@sherehebanda',
        socialTag: 'Get our vibe on'
        }
  ];

  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 150,
      origin: { y: 0.6 },
      colors: ['#ffb3c6', '#ffc6ec', '#e0bbe4', '#f3c5ff']
    });
  };

  return (
    <div className="footer-content">
      <h1 className="footer-title">We've Got You!</h1>
      <div className="social-grid">
        {socialsmedias.map((media, index) => (
          <div className="media-card" key={index}>
            <div className="media-header">
              <span className="media-icon">{media.faIcon}</span>
              <h2>{media.socialName}</h2>
            </div>
            <img src={media.iconImg} alt={media.socialName} className="media-badge" />
            <p className="media-text">{media.messageText}</p>
            <Link to={media.links} target="_blank" rel="noopener noreferrer">
              <button className="media-button" onClick={fireConfetti}>
                {media.socialTag} <strong>{media.socialName}</strong>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
