import React, { useEffect, useState } from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import Story from './components/sections/Story.jsx';
import Menu from './components/sections/Menu.jsx';
import Experience from './components/sections/Experience.jsx';
import Gallery from './components/sections/Gallery.jsx';
import Quote from './components/sections/Quote.jsx';
import Reservation from './components/sections/Reservation.jsx';
import { content } from './data/content.js';

function getInitialLanguage() {
  try { return localStorage.getItem('atlas-language') === 'en' ? 'en' : 'fr'; }
  catch { return 'fr'; }
}

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const t = content[language];
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'fr' ? 'Atlas Bistro — Gastronomie contemporaine' : 'Atlas Bistro — Contemporary Fine Dining';
    document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'fr'
      ? 'Atlas Bistro, concept fictif de restaurant gastronomique contemporain. Site React de démonstration pour portfolio.'
      : 'Atlas Bistro, a fictional contemporary fine dining concept. React portfolio demonstration website.');
    try { localStorage.setItem('atlas-language', language); } catch { /* storage blocked */ }
  }, [language]);
  return <><a className="skip-link" href="#main">{language === 'fr' ? 'Aller au contenu' : 'Skip to content'}</a>
    <Header t={t.nav} language={language} setLanguage={setLanguage}/>
    <main id="main"><Hero t={t.hero}/><Story t={t.about}/><Menu key={language} t={t.menu} language={language}/><Experience t={t.experience}/><Gallery t={t.gallery}/><Quote t={t.quote}/><Reservation t={t.reserve}/></main>
    <Footer t={t.footer} nav={t.nav}/>
  </>;
}
