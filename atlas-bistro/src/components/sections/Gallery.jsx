import React, { useEffect, useRef, useState } from 'react';
import SectionHeading from '../ui/SectionHeading.jsx';
import Icon from '../ui/Icons.jsx';
import { images } from '../../data/images.js';

const imageMap = {
  dining: images.galleryDining,
  plate: images.galleryPlate,
  chef: images.galleryChef,
  wine: images.galleryWine,
  detail: images.galleryDetail,
  dessert: images.galleryDessert,
};

export default function Gallery({ t }) {
  const [current, setCurrent] = useState(null);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);
  const total = t.items.length;
  const close = () => setCurrent(null);
  const show = (index) => setCurrent((index + total) % total);

  useEffect(() => {
    if (current === null) return;
    const onKey = (event) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') show(current + 1);
      if (event.key === 'ArrowLeft') show(current - 1);
    };
    document.addEventListener('keydown', onKey);
    const before = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = before;
      lastTriggerRef.current?.focus();
    };
  }, [current, total]);

  return <section className="gallery-section section-pad reveal-section" id="gallery"><div className="site-container gallery-layout">
    <div className="gallery-intro"><SectionHeading eyebrow={t.eyebrow} title={t.title} italic={t.italic} description={t.desc}/></div>
    <div className="gallery-grid">{t.items.map((item, i) => <button key={item.key} className={`gallery-tile gallery-tile-${i+1}`} type="button" onClick={(event) => { lastTriggerRef.current = event.currentTarget; setCurrent(i); }} aria-label={`${t.open} ${i + 1}`}><img src={imageMap[item.key]} loading="lazy" alt={item.alt}/><span><Icon name="zoom" size={22}/></span></button>)}</div>
  </div>
    {current !== null && <div className="lightbox" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="lightbox-content" role="dialog" aria-modal="true" aria-label={t.open}>
        <button type="button" ref={closeButtonRef} className="lightbox-close" onClick={close} aria-label={t.close}><Icon name="close" size={24}/></button>
        <button type="button" className="lightbox-nav lightbox-prev" onClick={() => show(current - 1)} aria-label={t.previous}><Icon name="arrowLeft" size={24}/></button>
        <img src={imageMap[t.items[current].key]} alt={t.items[current].alt}/>
        <button type="button" className="lightbox-nav lightbox-next" onClick={() => show(current + 1)} aria-label={t.next}><Icon name="arrow" size={24}/></button>
        <p className="lightbox-count">{t.count(current + 1, total)}</p>
      </div>
    </div>}
  </section>;
}
