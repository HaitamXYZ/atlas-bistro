# Atlas Bistro — Architecture & Functional Specification

## Product goal

Showcase a premium **fictional fine-dining restaurant** with a high-quality mobile-first interface. This is a personal React portfolio project demonstrating UI craftsmanship, reusable components, form validation, state management and deployment skills.

## Target users

1. A potential restaurant guest: explore the brand, discover dishes, see interior photos, simulate a reservation.
2. An Upwork client: evaluate design, mobile responsiveness, interactivity and code organization.

## UI structure

```text
<App>
 ├── <Header>                      [FR/EN toggle, responsive nav]
 └── <main>
     ├── <Hero>                    [brand positioning + CTAs]
     ├── <Story>                   [story / restaurant philosophy]
     ├── <Menu>                    [filtered cards by category]
     ├── <Experience>              [3 value propositions]
     ├── <Gallery>                 [interactive accessible photo preview]
     ├── <Quote>                   [original illustrative brand phrase]
     └── <Reservation>             [simulated booking form]
 └── <Footer>                      [navigation + demo disclaimer]
```

## Frontend architecture

- `src/data/content.js`: localized presentation copy (French / English).
- `src/data/menu.js`: typed-like stable menu object list (`id`, `category`, `price`, `image`, `fr`, `en`).
- `src/data/images.js`: external demo asset references; replace when real photo assets are obtained.
- `src/components/sections/*`: UI blocks; sections consume presentation content through props.
- `src/components/layout/*`: persistent header and footer.
- `src/components/ui/*`: shared smaller components.
- `src/utils/reservation.js`: pure testable form logic.
- `src/App.jsx`: the main composition; owns shared language state.
- `src/styles.css` + `tailwind.config.js`: design system and responsive styling.

### State and data flow

- `App` stores the selected language (`fr` or `en`) and passes the relevant copy to children.
- The selected language is persisted to browser `localStorage`. This is **only a preference**, not personally identifiable booking information.
- `Menu` stores selected category locally and derives `visibleDishes` from immutable menu data.
- `Gallery` stores the selected image index; pressing Escape or clicking the close icon/backdrop closes the preview.
- `Reservation` stores form values temporarily in React state and runs pure validation. **There are no HTTP requests, user accounts or booking records.**

## Design direction

- **Style:** editorial luxury, subtle, cinematic, never flashy.
- **Colors:** deep black / charcoal (`#0D0E0B`, `#171913`), soft beige (`#EFE9DD`), muted gold (`#C6A46A`).
- **Type:** Cormorant Garamond for headlines / Manrope for body and controls.
- **Layouts:** immersive hero, asymmetrical story photography, 3-column dish grid, large photographic experience section, editorial gallery, split-column reservation form.
- **Details:** wide breathing room, thin gold borders, uppercase micro-labels, serif italics, soft image overlays.
- **Accessibility:** visible keyboard focus, readable text contrast, alternate text for content images, labelled inputs, reduced motion support.

## Functional scope — MVP

| Feature | User action | Expected result | Status |
|---|---|---|---|
| Responsive nav | click on section or mobile menu | scroll to target, close menu | implemented |
| Language switch | click FR / EN | all visible UI copy changes | implemented |
| Filter dishes | choose category | only relevant dishes shown | implemented |
| Gallery | click photo | large image preview; Escape closes | implemented |
| Reservation form | enter name, email, date, guests, hour | local validation and demo confirmation | implemented |
| Real booking | send booking to API | database and email confirmation | NOT implemented (future phase) |
| Payments | pay online | actual transaction | NOT implemented |
| Admin portal | edit menu / reservations | secured CRUD | NOT implemented |

## Recommended phase 2: full stack

When the UI and deployment are finished, optional additional portfolio project work:

1. ASP.NET Core Web API with endpoints `/api/menu`, `/api/availability`, `/api/reservations`.
2. SQL database (PostgreSQL or SQL Server), migrations, validation, anti-spam, rate limiting.
3. Admin dashboard with authentication/authorization and clear audit logging.
4. Transactional email provider. Real reservations only after both backend validation and restaurant acceptance.
5. Integration tests and deployment of frontend + backend separately.

**Never activate a real booking flow for a fictional venue.** For the portfolio keep demo labels prominent.

## Ready-for-portfolio checklist

- [ ] `npm install`, `npm run dev`, `npm test`, and `npm run build` work locally.
- [ ] Check at 375px (mobile), 768px (tablet), 1440px (desktop).
- [ ] Replace or license all imagery; validate photo consistency.
- [ ] Check language switching, every nav link, every filter, gallery keyboard dismissal.
- [ ] Check past dates, invalid email, 1–8 people, empty fields, success/error text.
- [ ] Audit Lighthouse performance and accessibility; optimize images.
- [ ] Push to personal GitHub and deploy to Vercel/Netlify.
- [ ] Take desktop and mobile screenshots.
- [ ] Add Upwork entry identifying this as **self-initiated fictional concept project**.
