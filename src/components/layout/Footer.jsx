import React from 'react';
import Icon from '../ui/Icons.jsx';

export default function Footer({ t, nav }) {
  return <footer className="footer" id="contact">
    <div className="site-container">
      <div className="footer-grid">
        <div>
          <a href="#home" className="footer-brand" aria-label="Atlas Bistro home"><span>A</span><strong>ATLAS BISTRO</strong></a>
          <p className="footer-description">{t.desc}</p>
        </div>
        <div>
          <p className="footer-heading">{t.explore}</p>
          <div className="footer-links"><a href="#story">{nav.story}</a><a href="#menu">{nav.menu}</a><a href="#experience">{nav.experience}</a><a href="#gallery">{nav.gallery}</a><a href="#reservation">{nav.book}</a></div>
        </div>
        <div>
          <p className="footer-heading">{t.contact}</p>
          <p className="footer-detail"><Icon name="map" size={17}/>{t.city}</p>
          <p className="footer-detail"><Icon name="clock" size={17}/>{t.hours}</p>
          <p className="footer-detail"><Icon name="phone" size={17}/>{t.phone}</p>
          <p className="footer-detail"><Icon name="mail" size={17}/>{t.email}</p>
        </div>
      </div>
      <div className="footer-bottom"><div><p>{t.demo}</p><p>© {new Date().getFullYear()} Atlas Bistro. {t.copyright}</p></div><a href="#home" className="to-top" aria-label={t.top}><Icon name="arrowUp" size={16}/></a></div>
    </div>
  </footer>;
}
