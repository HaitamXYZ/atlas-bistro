import React from 'react';
import SectionHeading from '../ui/SectionHeading.jsx';
import Icon from '../ui/Icons.jsx';
import { images } from '../../data/images.js';

export default function Experience({ t }) {
  return <section id="experience" className="experience-section reveal-section">
    <div className="experience-photo" style={{ backgroundImage: `url('${images.experience}')` }} role="img" aria-label={t.imageAlt}/>
    <div className="experience-gradient"/>
    <div className="site-container experience-content">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} italic={t.italic} description={t.desc}/>
      <div className="experience-actions"><a href="#reservation" className="button-gold">{t.cta}<Icon name="arrow" size={18}/></a></div>
      <div className="experience-cards">{t.items.map(item => <article className="experience-card" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </div>
  </section>;
}
