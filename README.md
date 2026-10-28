# MAXDAX.IN — Premium Smart Living, Automation & Security Solutions

Official web platform for **MAXDAX PRIVATE LIMITED** (Kalamassery, Ernakulam, Kerala).

Website: [https://maxdax.in/](https://maxdax.in/)  
Contact: `+91 9061196096` | `info@maxdax.in` | `hr@maxdax.in`

---

## 🌟 Key Features & Architecture

- **eGlu-Inspired Ambient Living Journey**:
  - **Living Area**: Interactive virtual smartphone scene controller (`Guest Mode`, `Task Mode`, `Discussion Mode`, `Movie Night` with automated blackout drapes).
  - **Master Suite**: Perspective shift demonstrating `Morning Wakeup` sunrise illumination, `Reading Mode`, and `Good Night` blackout scene.
  - **Exterior Gate Climax**: Live motorized sliding gate simulation featuring flasher alerts, gate leaf translation, vehicle transit through safety photocells, and automatic close cycle.
- **Dedicated Solution Demonstration Portals**:
  - **Gate Automation**: Sliding gate motor torque simulation, photocell safety beam tripwire, and obstacle auto-reverse.
  - **4K CCTV Surveillance**: 4-camera video matrix wall with Quad-view / Single-view toggle, ColorVu Day/Night vision switching, and AI perimeter intrusion detection.
  - **Smart Landscape Irrigation**: Lush villa lawn visual, smartphone sprinkler activation with animated water spray jets, moisture sensors, and Monsoon Rain Delay mode.
  - **Video Door Phone Intercom**: Two-way visitor intercom simulation with one-tap digital magnetic lock release.
- **AI Smart Assistant Chatbot**:
  - Conversational chatbot supporting **English and Malayalam** natural language queries.
  - Instant knowledge base for gate motors, pricing, consultations, support tickets, and careers.
  - 1-click human escalation to WhatsApp.
- **Floating Action Hub**:
  - Persistent bottom-right floating dock housing the AI Assistant, Quick Support Menu, and WhatsApp direct link.
- **Careers & HR Portal (`/careers`)**:
  - 4 open technical and client relationship positions in Kerala.
  - Integration with official Google Application Form: [https://forms.gle/V3rtHUrXjShF51Ju6](https://forms.gle/V3rtHUrXjShF51Ju6).
  - Onsite application form dispatching to `hr@maxdax.in` via secure PHP mailer.
- **Service & Support Portal (`/service-support`)**:
  - Official Google Complaint Registration Form: [https://forms.gle/G6an7JSj5WSf17mcA](https://forms.gle/G6an7JSj5WSf17mcA) (Ref: MWD01256).
  - Onsite ticket generation (`MDX-TKT-xxxx`) and emergency service line.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite 6, Tailwind CSS, Lucide Icons, React Router v6.
- **Backend / Deployment**: Apache cPanel with `.htaccess` (SPA routing, Gzip, cache headers) and PHP 8 endpoints (`careers.php`, `contact.php`, `service-ticket.php`).
- **SEO & Social**: Meta tags, OpenGraph, JSON-LD structured business schema, `robots.txt`, and XML sitemap (`sitemap.xml`).

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ & npm

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```
The compiled, production-ready website will be generated in `dist/`.

---

## 📦 cPanel Deployment Guide

1. Run `npm run build` locally.
2. Upload the contents of the `dist/` directory into your cPanel `public_html/` (or DocumentRoot).
3. Ensure `.htaccess` is uploaded (it provides SPA rewriting so React Router URLs work seamlessly).
4. Verify PHP mailer endpoints in `api/`:
   - `api/contact.php` (Consultation enquiries sent to `info@maxdax.in`)
   - `api/careers.php` (Job applications sent to `hr@maxdax.in`)
   - `api/service-ticket.php` (Service tickets sent to support)

---

## 📄 License
Copyright © 2026 MAXDAX PRIVATE LIMITED. All rights reserved.
