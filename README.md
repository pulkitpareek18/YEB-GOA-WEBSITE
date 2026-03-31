# YEB 2026 | Young Entrepreneurs' BootCamp

> Official website for **YEB Edition 13** at **BITS Pilani, K K Birla Goa Campus** | 18-23 May 2026

---

## About YEB

Young Entrepreneurs' BootCamp (YEB) is a **6-day residential innovation bootcamp** for school students (Grade 9-12) at BITS Pilani, K K Birla Goa Campus. The program is designed to give students a glimpse of technology-driven innovation and the entrepreneurial ecosystem at BITS Pilani through talks, workshops, hands-on labs, and mentorship from industry leaders.

**Key Highlights:**
- Design thinking and innovation workshops
- Hands-on labs (EEE, Mechanical, 3D Printing, App Development, Biotech)
- Talks by industry leaders and startup founders
- BITS Pilani YEB Innovation Pitching Challenge
- Guided tour of Goa for experiential learning
- Residential experience on the BITS Pilani Goa Campus

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite** | Build tool and dev server |
| **React Router v7** | Client-side routing |
| **CSS Modules** | Scoped component styling |
| **Google Fonts** | Nunito Sans, Sora, Outfit |

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero section, stats, about teaser, featured speakers, CTA |
| `/about` | About | Program details, hands-on labs, BITSian unicorns, photo gallery |
| `/speakers` | Speakers | Chief guest, speaker grid with photos, session posters |
| `/committee` | Committee | Leadership, coordinators, program heads, core team with photos |
| `/registration` | Registration | Rs 500 registration, eligibility, selection process, YouTube payment guide |
| `/glimpses` | Glimpses | Photo carousel and gallery from previous editions |
| `/contact` | Contact | Email and phone contact information |

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** >= 9

### Installation

```bash
# Clone the repository
git clone https://github.com/pulkitpareek18/YEB-GOA-WEBSITE.git

# Navigate to the project
cd YEB-GOA-WEBSITE

# Install dependencies
npm install
```

### Development

```bash
# Start the dev server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build
npm run preview
```

---

## Project Structure

```
YEB-GOA-WEBSITE/
├── public/
│   └── images/
│       └── yeb-logo.png          # YEB logo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Navigation bar
│   │   ├── Navbar.module.css
│   │   ├── Footer.jsx            # Site footer
│   │   ├── Footer.module.css
│   │   └── ScrollReveal.jsx      # Scroll animation wrapper
│   ├── data/
│   │   ├── speakers.js           # Speaker data and photos
│   │   ├── committee.js          # Committee member data
│   │   └── program.js            # Program offerings and event photos
│   ├── pages/
│   │   ├── Home.jsx + .module.css
│   │   ├── About.jsx + .module.css
│   │   ├── Speakers.jsx + .module.css
│   │   ├── Committee.jsx + .module.css
│   │   ├── Registration.jsx + .module.css
│   │   ├── Editions.jsx + .module.css    # Glimpses page
│   │   └── Contact.jsx + .module.css
│   ├── App.jsx                   # Router and layout
│   ├── App.css                   # Global styles and CSS variables
│   └── main.jsx                  # Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## Design System

### Colors (from BITS Pilani brand)

| Color | Hex | Usage |
|---|---|---|
| Navy | `#1A165A` | Primary - headers, navigation, dark sections |
| Navy Dark | `#100E3D` | Hero backgrounds |
| Gold | `#F0A413` | Accent - buttons, badges, highlights |
| Red | `#ED1C24` | Alert accent |
| Sky Blue | `#76C2E5` | Secondary accent |

### Typography

- **Nunito Sans** - Body text (matches BITS Pilani official site)
- **Sora** - Hero headings and display text
- **Outfit** - Section headings and stats

---

## External Links

| Link | Purpose |
|---|---|
| [Registration Form](https://docs.google.com/forms/d/1t9VzDlyOfpvct2aLa08ByhmYjNYsgh4R3j8XLteQB3c/edit) | Application form |
| [SBI Collect Payment](https://onlinesbi.sbi.bank.in/sbicollect/icollecthome.htm) | Registration fee payment |
| [Payment Guide Video](https://www.youtube.com/watch?v=xUA0_Qpu4e4) | Step-by-step payment tutorial |

---

## Contact

- **Email:** yeb@goa.bits-pilani.ac.in
- **Phone:** 0832 258 0475 / 0832 258 0474

---

## License

This project is developed for BITS Pilani, K K Birla Goa Campus. All rights reserved.
