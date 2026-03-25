# 💼 MERN Stack Developer Portfolio

A professional, fully responsive portfolio website built to showcase MERN stack projects, skills, and experience. This portfolio is optimized for desktop, tablet, and mobile devices with a modern dark theme and smooth interactions.

**Live Demo:** [Visit Portfolio on Vercel](https://react-portfolio-daniyal.vercel.app)

---

## ✨ Features

- **Responsive Design** - Perfectly optimized for all devices (mobile-first approach)
- **Modern UI** - Dark theme with cyan accents (#0dcaf0) and glassmorphism effects
- **Multiple Pages** - Home, About, Projects, Resume, and Contact sections
- **Project Showcase** - Categorized projects (MERN, Web Development, C++)
- **Contact Form** - Fully functional contact form with Formspree integration
- **Mobile Optimized** - Touch-friendly buttons (44px minimum), fluid typography
- **Performance** - Fast load times, optimized images, smooth animations
- **Accessibility** - WCAG compliant with proper semantic HTML and ARIA labels

---

## 🛠️ Technologies Used

### Frontend
- **React** - UI library for building interactive components
- **React Router** - Client-side routing for navigation
- **Bootstrap 5** - CSS framework for responsive design
- **React Icons** - Icon library (FontAwesome, Simple Icons)
- **CSS3** - Custom styling with CSS variables and media queries

### Build & Deployment
- **Vercel** - Hosting and continuous deployment (auto-deploy from GitHub)
- **Git** - Version control
- **GitHub** - Repository hosting

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   ├── resume.pdf          # Resume download file
│   └── robots.txt          # SEO robots file
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx      # Navigation bar component
│   │
│   ├── pages/
│   │   ├── Home.jsx        # Hero/landing page
│   │   ├── About.jsx       # About me section
│   │   ├── Projects.jsx    # Project showcase with filters
│   │   ├── Resume.jsx      # Resume download page
│   │   └── Contact.jsx     # Contact form
│   │
│   ├── assets/
│   │   ├── mypic.jpg       # Profile photo for home page
│   │   └── mypic3.jpeg     # Profile photo for about page
│   │
│   ├── App.js              # Main app component
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
│
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies and scripts
├── README.md               # This file
└── vercel.json             # Vercel deployment config
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/daniyaljumshaid/react-portfolio.git
cd react-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env` file** (for contact form - optional):
```env
REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

### Running Locally

**Start development server:**
```bash
npm start
```

The portfolio will open at `http://localhost:3000`

**Build for production:**
```bash
npm run build
```

---

## 📋 Pages & Sections

### 🏠 Home
- Hero section with profile image
- NAME & tagline (MERN Stack Developer)
- Call-to-action buttons (See My Work, Contact Me)
- Quick navigation icons (About, Projects, Resume)
- Social links (GitHub, LinkedIn)

### 👤 About
- Professional introduction
- Current focus and expertise
- Educational background
- Career goals
- Tech stack icons with tooltips

### 💻 Projects
- Filterable project gallery (All, MERN, Web, C++)
- Project cards with descriptions
- Technology badges for each project
- Featured MERN e-commerce project

### 📄 Resume
- Download resume as PDF
- Resume highlights
- Education and skills overview

### 📩 Contact
- Contact information (Email, GitHub, LinkedIn)
- Fully functional contact form
- Form validation and success feedback
- Fallback to email client

---

## 🎨 Design Highlights

- **Dark Theme** - Reduces eye strain, modern aesthetic
- **Cyan Accent Color** (#0dcaf0) - Consistent branding
- **Glassmorphism Effects** - Frosted glass appearance with backdrop blur
- **Smooth Animations** - Fade-in, slide-up, and hover effects
- **Gradient Background** - Professional dark gradient
- **Responsive Typography** - Uses CSS `clamp()` for fluid sizing

---

## 📱 Mobile Optimization

- **Touch-Friendly** - All buttons minimum 44px height (WCAG standard)
- **Responsive Images** - Scales properly on all devices
- **Fluid Typography** - Text sizes adjust between min and max values
- **Mobile Menu** - Responsive navbar collapse
- **Color Consistency** - Fixed mobile browser color adjustments

---

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
REACT_APP_FORMSPREE_ENDPOINT=your_formspree_endpoint_here
```

### Vercel Deployment
The project is automatically deployed when you push to the `main` branch. Vercel's GitHub integration handles everything:

1. Detect changes on main branch
2. Install dependencies (`npm install`)
3. Build project (`npm run build`)
4. Deploy to Vercel CDN
5. Generate live URL

---

## 📚 Dependencies

### Main Dependencies
- `react` - UI library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing
- `react-icons` - Icon library (FontAwesome, Simple Icons)
- `bootstrap` - CSS framework

### Dev Dependencies
- Scripts are configured in `package.json`

---

## 🤝 Contributing

This is a personal portfolio project, but improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License.

---

## 👨‍💻 About the Developer

**Daniyal Jumshaid**
- MERN Stack Developer
- Currently studying BSCS at UET Lahore
- Passionate about building scalable web applications

### Connect With Me
- **GitHub:** [github.com/daniyaljumshaid](https://github.com/daniyaljumshaid)
- **LinkedIn:** [linkedin.com/in/daniyal-jumshaid](https://www.linkedin.com/in/daniyal-jumshaid-b37516247)
- **Email:** daniyaljumshaid74@gmail.com

---

## 🐛 Known Issues & Future Improvements

- [ ] Add dark/light theme toggle
- [ ] Implement blog section for technical articles
- [ ] Add project live demo links
- [ ] Create admin panel for portfolio management
- [ ] Add API integration for projects from GitHub
- [ ] Implement multi-language support

---

## 📈 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **Page Load Time:** < 2 seconds on 4G
- **Core Web Vitals:** Optimized

---

## 🎯 Future Enhancements

- Backend API (Node.js + Express)
- MongoDB integration for project management
- Authentication system
- Dynamic content management
- Email notifications
- Analytics dashboard

---

## 📞 Support

If you have any questions or suggestions, feel free to reach out:
- Email: daniyaljumshaid74@gmail.com
- GitHub Issues: [Report a bug](https://github.com/daniyaljumshaid/react-portfolio/issues)

---

**Made with ❤️ by Daniyal Jumshaid**

Last Updated: March 2026
