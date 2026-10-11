import React from 'react';
import Icon from '../ui/Icons.jsx';
import { images } from '../../data/images.js';

export default function Hero({ t }) {
  return <section id="home" className="hero">
    <div className="hero-image" role="img" aria-label={t.imageAlt} style={{ backgroundImage: `url('${images.hero}')` }}/>
    <div className="hero-shade"/>
    <div className="site-container hero-inner">
      <div className="hero-content" aria-labelledby="hero-title">
        <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" aria-hidden="true"/>{t.eyebrow}</p>
        <h1 className="hero-title" id="hero-title">{t.line1}<br/><em>{t.line2}</em></h1>
        <p className="hero-copy">{t.text}</p>
        <div className="hero-buttons"><a href="#reservation" className="button-gold">{t.cta}<Icon name="arrow" size={18}/></a><a className="button-outline" href="#menu">{t.second}</a></div>
      </div>
    </div>
    <div className="hero-bottom">
      <div className="site-container hero-bottom-inner">
        <a href="#story" className="scroll-cue" aria-label={t.scroll}><span aria-hidden="true"/>{t.scroll}</a>
        <span>01</span><span>02</span><span>03</span>
        <span className="hero-bottom-rule" aria-hidden="true"/>
        <span>{t.since}</span>
      </div>
    </div>
  </section>;
}
