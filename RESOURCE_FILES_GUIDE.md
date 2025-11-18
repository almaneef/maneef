# Resource Files Editing Guide

This guide explains how to edit the resource files to customize the landing page content without touching the code.

## Overview

All content is stored in JSON files in the `resources/` directory. This makes it easy for clients to update text, contact information, and styling without needing programming knowledge.

## File Structure

```
resources/
  ├── strings/
  │   ├── en.json          # All English text
  │   └── ar.json          # All Arabic text
  ├── company-info.json    # Company details
  ├── social-links.json     # Social media URLs
  ├── content/
  │   ├── about-us-en.json # About Us (English)
  │   └── about-us-ar.json # About Us (Arabic)
  └── theme.json           # Colors, fonts, spacing
```

---

## 1. Text Content (Strings)

### Files: `resources/strings/en.json` and `resources/strings/ar.json`

These files contain all user-facing text on the website.

### Structure

The files are organized by section:

- `nav` - Navigation menu items
- `hero` - Hero section text
- `about` - About section headings
- `products` - Products section text
- `contact` - Contact form labels and messages
- `footer` - Footer text

### Example: Changing Hero Section Text

**English (`en.json`):**

```json
{
  "hero": {
    "title": "Your New Title Here",
    "subtitle": "Your New Subtitle",
    "cta": "Your Button Text"
  }
}
```

**Arabic (`ar.json`):**

```json
{
  "hero": {
    "title": "عنوانك الجديد هنا",
    "subtitle": "العنوان الفرعي الجديد",
    "cta": "نص الزر"
  }
}
```

### Important Notes

- Always maintain the same structure in both files
- Keep the same keys (like `"title"`, `"subtitle"`) in both languages
- Use proper Arabic text in the Arabic file
- Be careful with JSON syntax (commas, quotes, brackets)

---

## 2. Company Information

### File: `resources/company-info.json`

Contains company details, contact information, and address.

### Sections

- `name` - Company name (English)
- `nameAr` - Company name (Arabic)
- `founded` - Year founded
- `contact` - All contact information

### Example: Updating Contact Information

```json
{
  "contact": {
    "email": "info@yourcompany.com",
    "phone": "+966 11 123 4567",
    "phoneInternational": "+966111234567",
    "address": {
      "street": "Your Street Address",
      "city": "Your City",
      "state": "Your State/Province",
      "postalCode": "12345",
      "country": "Your Country"
    },
    "addressAr": {
      "street": "عنوان الشارع",
      "city": "المدينة",
      "state": "المنطقة",
      "postalCode": "12345",
      "country": "البلد"
    },
    "workingHours": {
      "en": "Sunday - Thursday: 8:00 AM - 5:00 PM",
      "ar": "الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً"
    }
  }
}
```

### Phone Number Format

- `phone` - Display format (with spaces): `"+966 11 123 4567"`
- `phoneInternational` - Clickable format (no spaces): `"+966111234567"`

---

## 3. Social Media Links

### File: `resources/social-links.json`

Contains URLs for all social media platforms.

### Example

```json
{
  "facebook": "https://www.facebook.com/yourpage",
  "twitter": "https://twitter.com/yourhandle",
  "instagram": "https://www.instagram.com/yourprofile",
  "linkedin": "https://www.linkedin.com/company/yourcompany",
  "youtube": "https://www.youtube.com/@yourchannel"
}
```

### Notes

- Use full URLs (starting with `https://`)
- If you don't have a social media account, you can remove the line or leave it empty
- Links open in a new tab automatically

---

## 4. About Us Content

### Files: `resources/content/about-us-en.json` and `resources/content/about-us-ar.json`

Contains the About Us section content.

### Structure

```json
{
  "title": "About Us Title",
  "sections": [
    {
      "heading": "Section 1 Heading",
      "content": "Section 1 content text here..."
    },
    {
      "heading": "Section 2 Heading",
      "content": "Section 2 content text here..."
    }
  ]
}
```

### Adding More Sections

You can add as many sections as needed:

```json
{
  "sections": [
    {
      "heading": "First Section",
      "content": "Content..."
    },
    {
      "heading": "Second Section",
      "content": "Content..."
    },
    {
      "heading": "Third Section",
      "content": "Content..."
    }
  ]
}
```

### Adding More Stats

You can add more statistics:

```json
{
  "stats": [
    {
      "value": "500+",
      "label": "Clients"
    },
    {
      "value": "1000+",
      "label": "Products"
    },
    {
      "value": "50+",
      "label": "Team Members"
    }
  ]
}
```

---

## 5. Theme Customization

### File: `resources/theme.json`

Controls colors, fonts, spacing, and other visual elements.

### Colors

```json
{
  "colors": {
    "primary": "#1a365d", // Main brand color
    "primaryDark": "#0f2439", // Darker shade
    "primaryLight": "#2d4a6b", // Lighter shade
    "secondary": "#e63946", // Secondary color
    "accent": "#f77f00", // Accent color (buttons, highlights)
    "background": "#ffffff", // Page background
    "backgroundAlt": "#f8f9fa", // Alternate background
    "text": "#1a1a1a", // Main text color
    "textLight": "#6c757d", // Light text
    "success": "#28a745", // Success messages
    "error": "#dc3545" // Error messages
  }
}
```

### Color Format

- Use hex codes: `#1a365d`
- Or use named colors: `"white"`, `"black"`

### Fonts

```json
{
  "fonts": {
    "primary": "'Inter', sans-serif",
    "heading": "'Poppins', sans-serif",
    "arabic": "'Cairo', sans-serif"
  }
}
```

**Note:** Fonts are loaded from Google Fonts. To change fonts:

1. Update the font names here
2. Update the `@import` in `app/globals.css`

### Spacing

Controls padding and margins throughout the site:

```json
{
  "spacing": {
    "xs": "0.25rem", // 4px
    "sm": "0.5rem", // 8px
    "md": "1rem", // 16px
    "lg": "1.5rem", // 24px
    "xl": "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "6rem" // 96px
  }
}
```

---

## Best Practices

### 1. JSON Syntax

- Always use double quotes (`"`) not single quotes (`'`)
- Always end lines with commas except the last item
- Make sure all brackets `{}` and `[]` are properly closed

### 2. Testing Changes

After editing:

1. Save the file
2. Refresh the browser
3. Check both English and Arabic versions
4. Test on mobile and desktop

### 3. Backup

Before making major changes:

1. Copy the original file
2. Make your edits
3. Test thoroughly
4. Keep backups of working versions

### 4. Character Encoding

- Save files as UTF-8 encoding
- This is especially important for Arabic text
- Most text editors save as UTF-8 by default

### 5. Common Mistakes to Avoid

❌ **Don't:**

- Remove commas between items
- Use single quotes instead of double quotes
- Forget to close brackets
- Mix up English and Arabic content

✅ **Do:**

- Keep the same structure in both language files
- Test after each change
- Keep backups
- Use a JSON validator if unsure

---

## Quick Reference

### Navigation Menu

- `resources/strings/en.json` → `nav` section
- `resources/strings/ar.json` → `nav` section

### Hero Section

- `resources/strings/en.json` → `hero` section
- `resources/strings/ar.json` → `hero` section

### Contact Information

- `resources/company-info.json` → `contact` section

### Social Media

- `resources/social-links.json`

### About Us

- `resources/content/about-us-en.json`
- `resources/content/about-us-ar.json`

### Colors & Styling

- `resources/theme.json` → `colors` section

---

## Need Help?

If you encounter issues:

1. Check JSON syntax with an online validator
2. Ensure all quotes and brackets are properly closed
3. Verify file encoding is UTF-8
4. Check browser console for errors
5. Contact the development team

---

## Example: Complete Workflow

**Scenario:** Update company phone number and hero title

1. **Update Phone Number:**

   - Open `resources/company-info.json`
   - Find `"phone"` and `"phoneInternational"`
   - Update both values
   - Save file

2. **Update Hero Title:**

   - Open `resources/strings/en.json`
   - Find `"hero"` → `"title"`
   - Update the value
   - Save file
   - Open `resources/strings/ar.json`
   - Find `"hero"` → `"title"`
   - Update with Arabic translation
   - Save file

3. **Test:**
   - Refresh browser
   - Check phone number in footer
   - Check hero title in both languages
   - Test on mobile view

Done! ✅
