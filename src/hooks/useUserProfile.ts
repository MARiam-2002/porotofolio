import { useQuery } from 'react-query';
import { userApi } from '@/services/api';

// تعريف نوع بيانات المستخدم
interface UserProfile {
  _id: string;
  name: string;
  email: string;
  bio?: string;
  location?: string;
  phone?: string;
  profilePicture?: {
    url: string;
    public_id: string;
  };
  // يمكن إضافة المزيد من الحقول حسب الحاجة
}

/**
 * هوك مخصص لجلب بيانات المستخدم مع تخزين مؤقت للصورة الشخصية
 * يستخدم React Query للتخزين المؤقت وإعادة استخدام البيانات
 */
export const useUserProfile = () => {
  return useQuery<UserProfile, Error>(
    'userProfile', // مفتاح التخزين المؤقت
    async () => {
      try {
        const response = await userApi.getProfile();
        if (response.success && response.data) {
          return response.data as UserProfile;
        }
        throw new Error('Failed to fetch user profile');
      } catch (error) {
        // Return fallback data if API fails
        return {
          _id: 'fallback',
          name: 'Mahmoud Ahmed',
          email: 'mahmoudabuelazem2467@gmail.com',
          bio: 'Passionate Flutter Developer with expertise in mobile app development, state management, and modern UI/UX design.',
          location: 'Mansoura, Egypt',
          phone: '01021288238',
          profilePicture: {
            url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
            public_id: 'fallback-profile'
          }
        } as UserProfile;
      }
    },
    {
      staleTime: 1000 * 60 * 60, // تعتبر البيانات صالحة لمدة ساعة
      cacheTime: 1000 * 60 * 60 * 24, // تبقى في ذاكرة التخزين المؤقت لمدة يوم
      refetchOnWindowFocus: false, // لا تقم بإعادة الجلب عند التركيز على النافذة
      refetchOnMount: false, // لا تقم بإعادة الجلب عند تركيب المكون
      retry: 1, // محاولة واحدة فقط
      retryDelay: 1000, // انتظار ثانية واحدة قبل المحاولة
      onError: (error) => {
        console.error('Error fetching user profile:', error);
      },
    }
  );
};