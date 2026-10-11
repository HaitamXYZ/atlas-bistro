import React, { useEffect, useMemo, useState } from 'react';
import SectionHeading from '../ui/SectionHeading.jsx';
import Icon from '../ui/Icons.jsx';
import { formatLocalDate, validateReservation } from '../../utils/reservation.js';
import { images } from '../../data/images.js';

const initial = { name: '', email: '', date: '', time: '20:00', guests: '2', message: '' };
const times = ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30'];

function getErrors(form, t) {
  const errors = {};
  if (!form.name.trim() || form.name.trim().length < 2) errors.name = t.errors.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = t.errors.email;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(form.date) || form.date < formatLocalDate()) errors.date = t.errors.date;
  if (!times.includes(form.time)) errors.time = t.errors.time;
  if (!Number.isInteger(Number(form.guests)) || Number(form.guests) < 1 || Number(form.guests) > 8) errors.guests = t.errors.guests;
  return errors;
}

export default function Reservation({ t }) {
  const [form, setForm] = useState(initial);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle');
  const errors = useMemo(() => getErrors(form, t), [form, t]);
  const update = (event) => {
    setForm(prev => ({ ...prev, [event.target.name]: event.target.value }));
    if (status !== 'idle') setStatus('idle');
  };
  const markTouched = (event) => setTouched(prev => ({ ...prev, [event.target.name]: true }));

  useEffect(() => {
    if (status !== 'success') return;
    const timer = window.setTimeout(() => { setForm(initial); setTouched({}); setStatus('idle'); }, 2600);
    return () => window.clearTimeout(timer);
  }, [status]);

  const submit = (event) => {
    event.preventDefault();
    setTouched({ name: true, email: true, date: true, time: true, guests: true });
    if (!validateReservation(form)) { setStatus('error'); return; }
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 500);
  };

  const fieldError = (name) => touched[name] ? errors[name] : '';

  return <section className="reservation-section section-pad reveal-section" id="reservation">
    <div className="reservation-photo" style={{ backgroundImage: `url('${images.reservation}')` }} aria-hidden="true"/>
    <div className="site-container reservation-grid">
      <div className="reservation-copy">
        <SectionHeading eyebrow={t.eyebrow} title={t.title} italic={t.italic} description={t.desc}/>
        <div className="reservation-seal"><span>A</span><p>ATLAS BISTRO<br/>FINE DINING</p></div>
      </div>
      <div className="reservation-form-wrap"><form onSubmit={submit} className="reservation-form" noValidate>
        <div className="form-row">
          <label>{t.name}<input name="name" value={form.name} onChange={update} onBlur={markTouched} placeholder={t.namePlaceholder} required minLength={2} autoComplete="name" aria-invalid={Boolean(fieldError('name'))} aria-describedby="name-error"/>{fieldError('name') && <span id="name-error" className="field-error">{fieldError('name')}</span>}</label>
          <label>{t.email}<input name="email" type="email" value={form.email} onChange={update} onBlur={markTouched} placeholder="hello@example.com" required autoComplete="email" aria-invalid={Boolean(fieldError('email'))} aria-describedby="email-error"/>{fieldError('email') && <span id="email-error" className="field-error">{fieldError('email')}</span>}</label>
        </div>
        <div className="form-row form-row-three">
          <label>{t.date}<input name="date" type="date" value={form.date} min={formatLocalDate()} onChange={update} onBlur={markTouched} required aria-invalid={Boolean(fieldError('date'))} aria-describedby="date-error"/>{fieldError('date') && <span id="date-error" className="field-error">{fieldError('date')}</span>}</label>
          <label>{t.time}<select name="time" value={form.time} onChange={update} onBlur={markTouched} required aria-invalid={Boolean(fieldError('time'))} aria-describedby="time-error">{times.map(time => <option key={time} value={time}>{time}</option>)}</select>{fieldError('time') && <span id="time-error" className="field-error">{fieldError('time')}</span>}</label>
          <label>{t.guests}<select name="guests" value={form.guests} onChange={update} onBlur={markTouched} required aria-invalid={Boolean(fieldError('guests'))} aria-describedby="guests-error">{Array.from({ length: 8 }, (_, index) => index + 1).map(n => <option value={n} key={n}>{t.guestsOption(n)}</option>)}</select>{fieldError('guests') && <span id="guests-error" className="field-error">{fieldError('guests')}</span>}</label>
        </div>
        <label>{t.message}<textarea name="message" value={form.message} onChange={update} rows={3} maxLength={500} placeholder={t.messagePlaceholder}/></label>
        {status === 'success' && <p className="form-status success" role="status"><Icon name="check" size={20}/>{t.success}</p>}
        {status === 'error' && <p className="form-status error" role="alert">{Object.values(errors)[0] || t.errors.date}</p>}
        <button type="submit" className="button-gold form-submit" disabled={status === 'submitting'}>{status === 'submitting' ? t.sending : t.submit}<Icon name="arrow" size={18}/></button>
        <p className="form-disclaimer">{t.disclaimer}</p>
      </form></div>
    </div>
  </section>;
}
