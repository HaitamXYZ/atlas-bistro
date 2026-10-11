import React from 'react';

export default function SectionHeading({ eyebrow, title, italic, description, centered = false }) {
  return <div className={`section-heading ${centered ? 'text-center mx-auto' : ''}`}>
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="section-title">{title} <em>{italic}</em></h2>
    {description && <p className="section-description">{description}</p>}
  </div>;
}
