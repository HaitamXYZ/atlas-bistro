import React, { useMemo, useState } from 'react';
import SectionHeading from '../ui/SectionHeading.jsx';
import { dishes, menuCategories } from '../../data/menu.js';
import Icon from '../ui/Icons.jsx';

export default function Menu({ t, language }) {
  const [category, setCategory] = useState('all');
  const filtered = useMemo(() => category === 'all' ? dishes : dishes.filter(item => item.category === category), [category]);

  return <section className="menu-section section-pad reveal-section" id="menu"><div className="site-container">
    <div className="menu-top">
      <SectionHeading eyebrow={t.eyebrow} title={t.title} italic={t.italic} description={t.desc}/>
      <span className="menu-top-watermark" aria-hidden="true">AB.</span>
    </div>
    <div className="menu-filters" role="group" aria-label={t.filterLabel}>
      {menuCategories.map(cat => <button key={cat} type="button" aria-pressed={category === cat} onClick={() => setCategory(cat)} className={`menu-filter ${category === cat ? 'selected' : ''}`}>{t[cat]}</button>)}
    </div>
    <div className="dish-grid" aria-live="polite">
      {filtered.map(dish => <article className="dish-card" key={dish.id}>
        <div className="dish-photo"><img src={dish.image} alt={dish[language].name} loading="lazy"/><span>{t.tag}</span></div>
        <div className="dish-body">
          <div className="dish-heading"><h3>{dish[language].name}</h3><span>{dish.price} {t.currency}</span></div>
          <p>{dish[language].description}</p>
        </div>
      </article>)}
    </div>
    <div className="menu-footer"><p className="menu-disclaimer">{t.note}</p><a href="#reservation" className="text-link">{t.reserve}<Icon name="arrow" size={18}/></a></div>
  </div></section>;
}
