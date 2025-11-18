# دليل النشر - AL-MANEEF Landing Page

## الطريقة الأسهل: Vercel (موصى بها)

### الخطوات:

1. **رفع المشروع على GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
# أنشئ repository جديد على GitHub
git remote add origin https://github.com/YOUR_USERNAME/al-maneef-landing.git
git push -u origin main
```

2. **النشر على Vercel:**
   - اذهب إلى https://vercel.com
   - سجّل الدخول باستخدام GitHub
   - اضغط "Add New Project"
   - اختر repository المشروع
   - اضغط "Deploy"
   - انتظر حتى ينتهي البناء (2-3 دقائق)

3. **ربط الدومين:**
   - في صفحة المشروع على Vercel، اذهب إلى **Settings → Domains**
   - أضف دومينك (مثل: yourdomain.com)
   - Vercel سيعطيك سجلات DNS المطلوبة
   - اذهب إلى لوحة تحكم الدومين (من شركة التسجيل)
   - أضف السجلات التالية:
     - **Type**: A Record
     - **Name**: @ (أو اتركه فارغ)
     - **Value**: IP address من Vercel (سيظهر في الإعدادات)
     
     - **Type**: CNAME
     - **Name**: www
     - **Value**: cname.vercel-dns.com
   
   - انتظر 24-48 ساعة حتى تنتشر التغييرات

## إعدادات مهمة قبل النشر

### 1. تحديث ملف next.config.js (إذا لزم الأمر)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // للاستضافة على خوادم عادية
}

module.exports = nextConfig
```

### 2. التأكد من عمل Build محلياً:
```bash
npm run build
npm start
```

## خيارات أخرى للنشر:

### Netlify:
1. نفس خطوات GitHub
2. اذهب إلى https://netlify.com
3. اربط repository
4. Deploy
5. أضف الدومين من Settings → Domain management

### استضافة Node.js عادية:
1. Build المشروع: `npm run build`
2. ارفع الملفات إلى الخادم
3. شغل: `npm start` أو استخدم PM2
4. ربط الدومين عبر DNS في لوحة التحكم

## بعد النشر:

1. ✅ تحقق من عمل الموقع على الـ URL الجديد
2. ✅ تحقق من عمل الترجمة العربية/الإنجليزية
3. ✅ اختبر النماذج والأزرار
4. ✅ تحقق من SEO tags في `app/layout.tsx`

## ملاحظات مهمة:

- **SSL Certificate**: Vercel و Netlify يوفرون SSL مجاناً
- **النسخ الاحتياطي**: احفظ نسخة من الكود على GitHub
- **التحديثات**: أي push جديد على GitHub سيحدث الموقع تلقائياً

## حل المشاكل الشائعة:

1. **الموقع لا يفتح بعد ربط الدومين:**
   - انتظر 24-48 ساعة لانتشار DNS
   - تحقق من صحة DNS records
   
2. **خطأ في البناء:**
   - شغل `npm run build` محلياً لمعرفة الخطأ
   - تحقق من جميع الملفات مرفوعة على GitHub

3. **مشاكل في الصور/الفيديوهات:**
   - تأكد من الروابط الخارجية تعمل
   - أو استخدم Next.js Image component

