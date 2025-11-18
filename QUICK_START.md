# Quick Start Guide

Get the AL-MANEEF CO. landing page up and running in minutes.

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Framer Motion (animations)
- React Hook Form (form handling)

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

### 3. Build for Production

```bash
npm run build
npm start
```

## First Steps After Installation

### 1. Customize Company Information

Edit `resources/company-info.json`:
- Update company name
- Add your contact email and phone
- Update physical address
- Set working hours

### 2. Update Social Media Links

Edit `resources/social-links.json`:
- Replace placeholder URLs with your actual social media links
- Remove any platforms you don't use

### 3. Customize Content

- **English text**: Edit `resources/strings/en.json`
- **Arabic text**: Edit `resources/strings/ar.json`
- **About Us**: Edit `resources/content/about-us-en.json` and `about-us-ar.json`

### 4. Adjust Colors (Optional)

Edit `resources/theme.json` to match your brand colors.

## Testing

### Test Language Switching

1. Click the language switcher in the navigation (EN/AR)
2. Verify all text changes correctly
3. Check that RTL layout works for Arabic

### Test Contact Form

1. Scroll to the contact section
2. Fill out the form
3. Submit and verify success message appears
4. Test validation by submitting empty fields

### Test Responsiveness

1. Open browser developer tools (F12)
2. Toggle device toolbar
3. Test on mobile (375px), tablet (768px), and desktop (1920px)
4. Verify all sections display correctly

## Common Issues

### Port Already in Use

If port 3000 is busy:
```bash
# Use a different port
PORT=3001 npm run dev
```

### Module Not Found Errors

If you see import errors:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

If TypeScript complains:
```bash
# Restart the TypeScript server in your editor
# Or rebuild
npm run build
```

## Next Steps

1. ✅ Customize all resource files with your content
2. ✅ Replace placeholder product images with real ones
3. ✅ Set up API endpoint for contact form (see README.md)
4. ✅ Add your company logo
5. ✅ Test on multiple browsers
6. ✅ Deploy to production

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to:
- Netlify
- AWS Amplify
- Any Node.js hosting service

## Support

For detailed information:
- **Resource Files**: See `RESOURCE_FILES_GUIDE.md`
- **Full Documentation**: See `README.md`

---

**Ready to go!** 🚀

