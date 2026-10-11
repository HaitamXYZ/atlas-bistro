import React from 'react';
import SectionHeading from '../ui/SectionHeading.jsx';
import Icon from '../ui/Icons.jsx';
import { images } from '../../data/images.js';

const pillarIcons = ['leaf', 'chef', 'heart'];

export default function Story({ t }) {
  return <section className="story section-pad reveal-section" id="story"><div className="site-container story-grid">
    <div className="story-visual">
      <img src={images.story} loading="lazy" alt={t.imageAlt}/>
      <div className="story-image-panel"><span>ATLAS</span><strong>BISTRO</strong></div>
    </div>
    <div className="story-copy">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} italic={t.italic}/>
      <p>{t.text1}</p>
      <p>{t.text2}</p>
      <div className="story-pillars">
        {t.pillars.map((pillar, index) => <article className="story-pillar" key={pillar.title}>
          <Icon name={pillarIcons[index]} size={28}/>
          <h3>{pillar.title}</h3>
          <p>{pillar.text}</p>
        </article>)}
      </div>
    </div>
  </div></section>;
}
