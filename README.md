# AL-MANEEF CO. Landing Page

A professional, bilingual (Arabic/English) landing page for AL-MANEEF CO., a manufacturer of sanitary and plastic materials.

## Features

- ✅ Clean Architecture with clear separation of concerns
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Bilingual support (Arabic/English) with RTL handling
- ✅ Smooth animations and transitions
- ✅ SEO optimized
- ✅ Accessibility compliant (WCAG)
- ✅ Form validation and error handling
- ✅ All content in resource files for easy editing

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Framer Motion** - Animations
- **React Hook Form** - Form handling and validation
- **CSS-in-JS** - Styled JSX for component styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Resource Files Structure

All content is stored in resource files for easy client editing:

```
resources/
  ├── strings/
  │   ├── en.json          # English translations
  │   └── ar.json          # Arabic translations
  ├── company-info.json     # Company details and contact info
  ├── social-links.json     # Social media URLs
  ├── content/
  │   ├── about-us-en.json  # About Us content (English)
  │   └── about-us-ar.json  # About Us content (Arabic)
  └── theme.json            # Colors, fonts, spacing, styling
```

## Editing Resource Files

### Strings (Text Content)

Edit `resources/strings/en.json` for English text and `resources/strings/ar.json` for Arabic text.

**Example:**
```json
{
  "hero": {
    "title": "Your New Title",
    "subtitle": "Your New Subtitle"
  }
}
```

### Company Information

Edit `resources/company-info.json` to update:
- Company name
- Contact email and phone
- Physical address
- Working hours

**Example:**
```json
{
  "contact": {
    "email": "newemail@company.com",
    "phone": "+966 11 123 4567"
  }
}
```

### Social Media Links

Edit `resources/social-links.json` to update social media URLs:

```json
{
  "facebook": "https://www.facebook.com/yourpage",
  "twitter": "https://twitter.com/yourhandle"
}
```

### About Us Content

Edit `resources/content/about-us-en.json` (English) and `resources/content/about-us-ar.json` (Arabic) to update the About Us section.

**Structure:**
```json
{
  "title": "About Us Title",
  "sections": [
    {
      "heading": "Section Heading",
      "content": "Section content..."
    }
  ],
  "stats": [
    {
      "value": "35+",
      "label": "Years of Experience"
    }
  ]
}
```

### Theme Customization

Edit `resources/theme.json` to customize:
- Colors (primary, secondary, accent, etc.)
- Fonts
- Spacing values
- Border radius
- Shadows
- Transitions

**Example:**
```json
{
  "colors": {
    "primary": "#1a365d",
    "secondary": "#e63946"
  }
}
```

## Products

Products are defined in `lib/utils/products.ts`. To add or modify products, edit this file:

```typescript
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Product Name',
    nameAr: 'اسم المنتج',
    description: 'Product description...',
    // ... other fields
  }
];
```

## Language Switching

The language switcher is available in the navigation bar. The selected language is saved in localStorage and persists across page reloads.

## Form Submission

The contact form currently simulates submission. To connect to a real backend:

1. Create an API route in `app/api/contact/route.ts`
2. Update the `onSubmit` function in `components/ContactForm.tsx` to call your API

**Example API route:**
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Process and save the form data
  return Response.json({ success: true });
}
```

## SEO

The page includes:
- Meta tags in `app/layout.tsx`
- Semantic HTML
- Proper heading hierarchy
- Alt text for images (add to product images)
- Open Graph tags

## Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Skip to main content link
- Proper heading hierarchy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images (consider using Next.js Image component)
- Code splitting
- Lazy loading for animations
- Minimal dependencies

## License

This project is proprietary and confidential.

## Support

For questions or issues, please contact the development team.

