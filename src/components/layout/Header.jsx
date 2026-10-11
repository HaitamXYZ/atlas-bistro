import React, { useEffect, useState } from 'react';
import Icon from '../ui/Icons.jsx';

export default function Header({ t, language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    const sections = ['home', 'story', 'menu', 'experience', 'gallery', 'reservation']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target?.id) setActiveSection(visible.target.id);
    }, { rootMargin: '-32% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-open', open);
    return () => document.body.classList.remove('nav-open');
  }, [open]);

  const links = [
    ['#story', t.story, 'story'],
    ['#menu', t.menu, 'menu'],
    ['#experience', t.experience, 'experience'],
    ['#gallery', t.gallery, 'gallery'],
  ];
  const close = () => setOpen(false);
  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    close();
  };

  return <header className={`site-header ${scrolled || open ? 'site-header-scrolled' : ''}`}>
    <div className="site-container flex h-full items-center justify-between gap-4">
      <a href="#home" className="brand" onClick={close} aria-label="Atlas Bistro, home" aria-current={activeSection === 'home' ? 'page' : undefined}><span className="brand-mark">A<span>.</span></span><span className="brand-name">ATLAS <strong>BISTRO</strong></span></a>
      <nav className={`nav-links ${open ? 'nav-links-open' : ''}`} id="main-navigation" aria-label={t.label}>
        {links.map(([href, text, id]) => <a href={href} key={href} onClick={close} aria-current={activeSection === id ? 'page' : undefined}>{text}</a>)}
        <a href="#reservation" className="mobile-book" onClick={close}>{t.book}</a>
      </nav>
      <div className="header-actions">
        <div className="lang-switch" aria-label={t.languageLabel}><button type="button" lang="fr" aria-pressed={language === 'fr'} className={language === 'fr' ? 'active' : ''} onClick={() => changeLanguage('fr')}>FR</button><span aria-hidden="true">/</span><button type="button" lang="en" aria-pressed={language === 'en'} className={language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>EN</button></div>
        <a className="header-book" href="#reservation" onClick={close} aria-current={activeSection === 'reservation' ? 'page' : undefined}>{t.book} <Icon name="arrow" size={16}/></a>
        <button className="mobile-trigger" type="button" aria-label={open ? t.close : t.open} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen((v) => !v)}><Icon name={open ? 'close' : 'menu'} size={26}/></button>
      </div>
    </div>
  </header>;
}
