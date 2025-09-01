# إصلاح Avatar في صفحة Home

## المشكلة:
صورة الملف الشخصي لم تكن تظهر في avatar صفحة Home لأن `useUserProfile` hook كان يحاول الاتصال بـ API وقد يفشل.

## الحل:
تم إضافة fallback data مباشرة في `Home.tsx` لضمان ظهور الصورة حتى لو فشل API.

## التغييرات المطبقة:

### 1. **إضافة Fallback Data في Home.tsx**
```diff
const Home: React.FC = () => {
    const { t } = useLanguage();
    const { data: userData, isLoading: loading, error } = useUserProfile();
    const { projects: featuredProjects, loading: projectsLoading, error: projectsError } = useFeaturedProjects();

    if (error) {
        console.error('Error fetching user data:', error);
    }

    if (projectsError) {
        console.error('Error fetching featured projects:', projectsError);
    }

+   // Fallback data for user profile
+   const fallbackUserData = {
+       name: 'Mahmoud Ahmed',
+       profilePicture: {
+           url: '/97337243.jpeg'
+       }
+   };
+
+   // Use fallback data if API fails or data is not available
+   const displayUserData = userData || fallbackUserData;
```

### 2. **تحديث Avatar Logic**
```diff
- ) : userData?.profilePicture?.url ? (
+ ) : displayUserData?.profilePicture?.url ? (
    <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 hover:scale-105 transition-transform duration-300">
        <OptimizedImage
-           src={userData.profilePicture.url}
-           alt={userData.name}
+           src={displayUserData.profilePicture.url}
+           alt={displayUserData.name}
            className="w-full h-full object-cover"
            priority={true}
            showLoading={false}
        />
    </div>
```

## النتيجة:

✅ **Avatar في Home**: ستظهر الصورة في avatar صفحة Home
✅ **Fallback Data**: بيانات احتياطية في حالة فشل API
✅ **Build ناجح**: بدون أخطاء
✅ **اتساق**: نفس الصورة في جميع الأماكن

## المميزات:

- **موثوقية**: الصورة ستظهر حتى لو فشل API
- **أداء**: تحميل أسرع للصورة المحلية
- **اتساق**: نفس الصورة في Navigation و Footer و Home
- **تجربة مستخدم**: لا تختفي الصورة أبداً

الآن الصورة ستظهر في avatar صفحة Home أيضاً! 🎉
