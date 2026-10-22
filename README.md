# KnowledgeHub

KnowledgeHub is an Arabic (RTL) e-learning platform front end built with Angular 21. It offers courses, learning paths, quizzes, a blog, and a user profile with certificates.

> **Note:** This is a front-end-only project. All data (courses, quizzes, blogs, paths) is hard-coded in Angular services, and user accounts are stored in the browser's `localStorage`. There is no backend or API yet.

## Features

- **Courses**: browse by specialty, view course details, add to cart, and check out
- **Learning paths**: structured paths with a details page for each
- **Quizzes**: quizzes grouped by category, each with timed multiple-choice questions
- **Blog**: article list and article details
- **Profile**: overview, enrolled courses, settings, and printable certificates (A4 landscape)
- **Authentication**: sign up and log in, with protected routes behind an auth guard
- **Static pages**: About, Contact Us, FAQ, Terms & Conditions, Privacy Policy, and a 404 page

## Tech stack

- [Angular 21](https://angular.dev) (standalone components plus lazy-loaded feature modules)
- [nexium-ui](https://www.npmjs.com/package/nexium-ui) for UI components (`nx-icon` icons, `nx-carousel`)
- SCSS with a shared design system (`src/assets/styles`)
- TypeScript 5.9, RxJS 7.8
- Karma and Jasmine for unit tests

## Getting started

### Prerequisites

- Node.js 20.19+, 22.12+, or 24+ (required by Angular 21)
- npm

### Install and run

```bash
npm install
npm start
```

Then open `http://localhost:4500/`. The app reloads automatically when you change a source file.

Most pages require login. Open `/register`, create an account, and you'll be signed in. The account is saved only in your browser.

## Scripts

| Command         | Description                                         |
| --------------- | --------------------------------------------------- |
| `npm start`     | Start the dev server (`ng serve`)                   |
| `npm run build` | Production build, output in `dist/knowledge-hub`    |
| `npm run watch` | Development build that rebuilds on file changes     |
| `npm test`      | Run unit tests with Karma                           |

## Project structure

```
src/
├── app/                     # Root component, app config, and routes (app.routes.ts)
├── home/                    # Landing page
├── layout/
│   ├── header/              # Site header / navigation
│   └── footer/              # Site footer
├── components/
│   ├── about/               # About page
│   ├── blogs/               # Blog list and details (lazy-loaded module)
│   ├── contact/             # Contact Us page
│   ├── cources/             # Courses: list, specialty, details, cart, checkout
│   ├── FAQ/                 # FAQ page
│   ├── guard/auth/          # AuthService (localStorage) and authGuard
│   ├── login-signup-page/   # Login and sign-up
│   ├── page-no-found/       # 404 page
│   ├── paths/               # Learning paths (lazy-loaded module)
│   ├── privacy/             # Privacy Policy
│   ├── profile/             # Profile, certificates modal
│   ├── quizzes/             # Quizzes: list, categories, details (lazy-loaded module)
│   ├── shared/              # Shared card component and carousel-pages pipe
│   └── terms/               # Terms & Conditions
├── assets/
│   ├── fonts/               # Segoe UI
│   ├── icons/               # favicon.svg
│   ├── img/                 # Course, blog, quiz, and avatar images
│   └── styles/              # variables.scss, mixins.scss, main-styles.scss
├── index.html               # lang="ar" dir="rtl"
└── styles.scss              # Global entry point
```

## Routes

| Path                         | Page                    | Auth required |
| ---------------------------- | ----------------------- | :-----------: |
| `/`                          | Home                    |               |
| `/register`                  | Login / Sign up         |               |
| `/faq`                       | FAQ                     |               |
| `/terms`                     | Terms & Conditions      |               |
| `/privacy`                   | Privacy Policy          |               |
| `/contact-us`                | Contact Us              | ✓             |
| `/about`                     | About                   | ✓             |
| `/courses`                   | Course list             | ✓             |
| `/courses/:specialty`        | Courses by specialty    | ✓             |
| `/courses/details/:id`       | Course details          | ✓             |
| `/courses/checkout`          | Checkout                | ✓             |
| `/paths`, `/paths/:slug`     | Learning paths          | ✓             |
| `/quizzes`                   | Quiz list               | ✓             |
| `/quizzes/categories/:id`    | Quizzes in a category   | ✓             |
| `/quizzes/details/:id`       | Take a quiz             | ✓             |
| `/blogs`, `/blogs/details/:id` | Blog                  | ✓             |
| `/profile`                   | User profile            | ✓             |

## Data and authentication

- **Content** lives in services: `courses.service.ts`, `quizzes.service.ts`, `paths.service.ts`, `blogs.service.ts`. To add a course or quiz, add an entry to the matching array.
- **Users** are stored in `localStorage` under `knowledgehub_users`. The logged-in session is a token stored under `currentUserToken`.
- Passwords are stored in plain text in the browser. This is for demo purposes only. Replace `AuthService` with a real backend before any production use.
- The contact form currently only logs submissions to the console.

## Styling

All styles are global and live in `src/assets/styles/main-styles.scss`. Each page uses its own BEM class prefix, for example `hp-` (home), `cd-` (course details), and `ct-` (contact). Colors, spacing, and fonts are defined in `variables.scss`. The layout is right-to-left, so prefer logical properties such as `margin-inline-start` over `left`/`right`.

### Icons and carousels

- Icons use `nexium-ui`'s icon component, for example `<nx-icon variant="svg" icon="nx-mail" size="1em"></nx-icon>`. Import `NxIcon` from `nexium-ui` in the component.
- Carousels use `<nx-carousel>` with the `carouselPages` pipe, which groups items into pages of 1–3 cards depending on screen width. The carousel is set to `dir="ltr"` and each page to `dir="rtl"`, because its sliding track doesn't support right-to-left layouts. Carousel styles live in the `kh-carousel` section of `main-styles.scss`.
- The `nexium-ui` stylesheet is loaded through the `styles` array in `angular.json`.
