# إصلاح مشكلة الصفحة البيضاء على Vercel

## المشاكل التي تم إصلاحها:

### 1. مشكلة في `index.html`
- **المشكلة**: المسار المطلق `/src/main.tsx` لا يعمل على Vercel
- **الحل**: تغيير المسار إلى نسبي `./src/main.tsx`

### 2. مشكلة في `vite.config.ts`
- **المشكلة**: ترتيب خاطئ لـ `base` و `define`
- **الحل**: نقل `base: '/'` قبل `define`

### 3. مشكلة في `index.css`
- **المشكلة**: `@import` يجب أن يكون قبل `@tailwind`
- **الحل**: نقل `@import './styles/performance.css'` إلى بداية الملف

### 4. مشكلة في `package.json`
- **المشكلة**: `homepage` مخصص لـ GitHub Pages
- **الحل**: إزالة `homepage` من package.json

### 5. تحسين `vercel.json`
- **المشكلة**: rewrite pattern قد يتعارض مع API routes
- **الحل**: تحديث pattern إلى `"/((?!api/).*)"`

## الإصلاحات المطبقة:

```diff
// index.html
- <script type="module" src="/src/main.tsx"></script>
+ <script type="module" src="./src/main.tsx"></script>

// vite.config.ts
+ base: '/',
  define: {
    'import.meta.env.VITE_API_BASE_URL': JSON.stringify('https://profile-fhvk.vercel.app/api')
  },
- base: '/',

// index.css
+ /* Import performance optimizations */
+ @import './styles/performance.css';
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
- /* Import performance optimizations */
- @import './styles/performance.css';

// package.json
- "homepage": "https://mahmoudabuelazm.github.io/portfolio-website",

// vercel.json
- "source": "/(.*)",
+ "source": "/((?!api/).*)",
```

## خطوات النشر:

1. تأكد من أن جميع التغييرات محفوظة
2. ارفع الكود إلى GitHub
3. اربط المشروع بـ Vercel
4. تأكد من أن إعدادات Build صحيحة:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## اختبار النشر:

1. افتح Vercel Dashboard
2. اذهب إلى مشروعك
3. تحقق من Deployments
4. افتح الرابط المولود
5. تأكد من أن الموقع يعمل بدون صفحة بيضاء

## ملاحظات مهمة:

- تأكد من أن Backend API يعمل على `https://profile-fhvk.vercel.app/api`
- تحقق من Console في المتصفح للبحث عن أي أخطاء
- تأكد من أن جميع الصور والملفات موجودة في مجلد `public`

## إذا استمرت المشكلة:

1. تحقق من Vercel Function Logs
2. تأكد من أن Node.js version متوافق (>=18.0.0)
3. تحقق من أن جميع dependencies مثبتة
4. جرب حذف cache وإعادة build
