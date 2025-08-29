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
      const response = await userApi.getProfile();
      if (response.success && response.data) {
        return response.data as UserProfile;
      }
      throw new Error('Failed to fetch user profile');
    },
    {
      staleTime: 1000 * 60 * 60, // تعتبر البيانات صالحة لمدة ساعة
      cacheTime: 1000 * 60 * 60 * 24, // تبقى في ذاكرة التخزين المؤقت لمدة يوم
      refetchOnWindowFocus: false, // لا تقم بإعادة الجلب عند التركيز على النافذة
      refetchOnMount: false, // لا تقم بإعادة الجلب عند تركيب المكون
      onError: (error) => {
        console.error('Error fetching user profile:', error);
      },
    }
  );
};