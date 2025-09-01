import { useState, useEffect } from 'react';
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
}

/**
 * هوك مخصص لجلب بيانات المستخدم
 */
export const useUserProfile = () => {
  const [data, setData] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setIsLoading(true);
        const response = await userApi.getProfile();
        if (response.success && response.data) {
          setData(response.data as UserProfile);
        } else {
          throw new Error('Failed to fetch user profile');
        }
      } catch (err) {
        console.error('Error fetching user profile:', err);
        // Return fallback data if API fails
        setData({
          _id: 'fallback',
          name: 'Mahmoud Ahmed',
          email: 'mahmoudabuelazem2467@gmail.com',
          bio: 'Passionate Flutter Developer with expertise in mobile app development, state management, and modern UI/UX design.',
          location: 'Mansoura, Egypt',
          phone: '01021288238',
          profilePicture: {
            url: '/97337243.jpeg',
            public_id: 'fallback-profile'
          }
        });
        setError(null); // Clear error since we have fallback data
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return { data, isLoading, error };
};