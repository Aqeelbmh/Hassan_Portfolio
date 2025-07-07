# Hassan Portfolio - Professional Accounting Portfolio

A modern, responsive portfolio website for Hasan Rabiev, a certified accounting professional. Built with React, Tailwind CSS, and Vite for optimal performance and user experience.

## 🎯 Features

### Professional Design
- **Modern UI/UX**: Clean, professional design with accountant-themed styling
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **Smooth Animations**: Elegant transitions and hover effects
- **Professional Branding**: Consistent color scheme and visual identity

### Portfolio Sections
- **Hero Section**: Professional introduction with call-to-action
- **About Me**: Personal background, statistics, and core competencies
- **Education**: Academic background with modern card layout
- **Experience**: Professional work history with achievements
- **Certifications**: Professional certifications and achievements
- **Skills**: Technical and soft skills with progress indicators
- **Languages**: Language proficiency levels
- **Contact**: Professional contact information and form

### Technical Features
- **React 18**: Latest React features and hooks
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Vite**: Fast build tool and development server
- **Smooth Scrolling**: Seamless navigation between sections
- **Loading Screen**: Professional loading animation
- **Scroll Progress**: Visual scroll progress indicator
- **Back to Top**: Convenient navigation back to top
- **Mobile Navigation**: Responsive hamburger menu

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
   git clone <repository-url>
cd Hassan_Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
Hassan_Portfolio/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Languages.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navigation.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── Skills.jsx
│   │   └── ui/
│   │       ├── card.jsx
│   │       └── tabs.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── lib/
│       └── utils.js
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) to Purple (#8B5CF6) gradient
- **Secondary**: Green (#10B981) for success indicators
- **Background**: Dark slate with gradient overlays
- **Text**: White with various opacity levels for hierarchy

### Typography
- **Headings**: Bold, professional font weights
- **Body**: Clean, readable text with proper line spacing
- **Accent**: Gradient text effects for emphasis

### Components
- **Cards**: Rounded corners with subtle shadows and borders
- **Buttons**: Gradient backgrounds with hover effects
- **Navigation**: Glassmorphism effect with backdrop blur
- **Icons**: Consistent iconography throughout

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Content Updates
1. **Personal Information**: Update contact details in `Contact.jsx`
2. **Experience**: Modify work history in `Experience.jsx`
3. **Education**: Update academic background in `Education.jsx`
4. **Skills**: Adjust skills and proficiency in `Skills.jsx`

### Styling Changes
1. **Colors**: Modify the color palette in `tailwind.config.js`
2. **Animations**: Adjust animation classes in component files
3. **Layout**: Update grid and flex layouts as needed

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `App.jsx`
3. Update navigation links in `Navigation.jsx`

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect Vite configuration
3. Deploy with default settings

### GitHub Pages
1. Add `"homepage": "https://username.github.io/repo-name"` to `package.json`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Run `npm run build && npm run deploy`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💼 About Hasan Rabiev

Hasan Rabiev is a certified accounting professional with expertise in:
- Financial Analysis and Reporting
- Tax Planning and Compliance
- Audit Procedures and Standards
- Budget Planning and Management
- GAAP, IFRS, and SOX Compliance

## 🤝 Contact

- **Email**: hasanrabiev123@gmail.com
- **Phone**: +992 900 016 225
- **Location**: Jakarta, Indonesia
- **LinkedIn**: [Hasan Rabiev](https://www.linkedin.com/in/hasan-rabiev-20a554270/)
- **Instagram**: [@hasan_rbv](https://www.instagram.com/hasan_rbv/)

---

Built with ❤️ using React, Tailwind CSS, and Vite
