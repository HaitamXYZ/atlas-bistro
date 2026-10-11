import test from 'node:test';
import assert from 'node:assert/strict';
import { formatLocalDate, validateReservation } from '../src/utils/reservation.js';

const booking = { name: 'Alex Martin', email: 'alex@example.com', date: '2027-01-15', time: '20:00', guests: '2' };

test('valid demo reservation', () => {
  assert.equal(validateReservation(booking, '2027-01-10'), true);
});
test('reject past date', () => {
  assert.equal(validateReservation(booking, '2027-02-01'), false);
});
test('reject invalid email', () => {
  assert.equal(validateReservation({ ...booking, email: 'invalid' }, '2027-01-10'), false);
});
test('reject impossible guest count and time', () => {
  assert.equal(validateReservation({ ...booking, guests: '9' }, '2027-01-10'), false);
  assert.equal(validateReservation({ ...booking, time: '03:00' }, '2027-01-10'), false);
});
test('local ISO date format', () => {
  assert.equal(formatLocalDate(new Date(2026, 9, 11)), '2026-10-11');
});
