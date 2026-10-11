import React from 'react';

export default function Quote({ t }) {
  return <aside className="quote-section reveal-section" aria-label={t.attribution}>
    <div className="site-container quote-inner">
      <div className="quote-ornament" aria-hidden="true">“</div>
      <blockquote>{t.text}</blockquote>
      <div className="quote-rule" aria-hidden="true"/>
      <p>{t.attribution}</p>
    </div>
  </aside>;
}
