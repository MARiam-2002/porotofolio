import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiResponse, PaginatedResponse, ApiError } from '@/types';

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://profile-fhvk.vercel.app/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/';
    }

    return Promise.reject(error);
  }
);

// Generic API functions
export const apiService = {
  // GET request
  get: async <T>(url: string, params?: any): Promise<ApiResponse<T>> => {
    try {
      const response = await api.get(url, { params });
      return response.data;
    } catch (error: any) {
      throw handleApiError(error);
    }
  },

  // POST request
  post: async <T>(url: string, data?: any): Promise<ApiResponse<T>> => {
    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (error: any) {
      throw handleApiError(error);
    }
  },

  // PUT request
  put: async <T>(url: string, data?: any): Promise<ApiResponse<T>> => {
    try {
      const response = await api.put(url, data);
      return response.data;
    } catch (error: any) {
      throw handleApiError(error);
    }
  },

  // DELETE request
  delete: async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
      const response = await api.delete(url);
      return response.data;
    } catch (error: any) {
      throw handleApiError(error);
    }
  },

  // Upload file
  upload: async <T>(url: string, file: File, onProgress?: (progress: number) => void): Promise<ApiResponse<T>> => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await api.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (onProgress && progressEvent.total) {
            const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            onProgress(progress);
          }
        },
      });
      return response.data;
    } catch (error: any) {
      throw handleApiError(error);
    }
  },
};

// Error handler
const handleApiError = (error: any): ApiError => {
  if (error.response) {
    // Server responded with error status
    const { data, status } = error.response;
    return {
      message: data?.message || data?.error || 'An error occurred',
      status,
      errors: data?.errors,
    };
  } else if (error.request) {
    // Request was made but no response received
    return {
      message: 'No response from server. Please check your connection.',
      status: 0,
    };
  } else {
    // Something else happened
    return {
      message: error.message || 'An unexpected error occurred',
      status: 0,
    };
  }
};

// Specific API endpoints
export const userApi = {
  getProfile: () => apiService.get<any>('/users'),
  updateProfile: (data: any) => apiService.put<any>(`/users/${data._id}`, data),
  uploadAvatar: (file: File) => apiService.upload<any>('/users/upload-avatar', file),
  deleteAvatar: () => apiService.delete<any>('/users/delete-avatar'),
};

export const projectApi = {
  getAll: (params?: any) => apiService.get<PaginatedResponse<any>>('/projects', params),
  getFeatured: () => apiService.get<any[]>('/projects/featured'),
  getBySlug: async (slug: string) => {
    try {
      console.log('🔍 API: Fetching project with slug:', slug);
      console.log('🔍 API: Full URL:', `${api.defaults.baseURL}/projects/${slug}`);
      console.log('🔍 API: Base URL:', api.defaults.baseURL);

      const response = await api.get(`/projects/${slug}`);
      console.log('🔍 API: Response status:', response.status);
      console.log('🔍 API: Response data:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('🔍 API: Error details:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
        config: error.config
      });
      throw handleApiError(error);
    }
  },
  create: (data: any) => apiService.post<any>('/projects', data),
  update: (id: string, data: any) => apiService.put<any>(`/projects/${id}`, data),
  delete: (id: string) => apiService.delete<any>(`/projects/${id}`),
  uploadGallery: (id: string, files: File[]) => {
    const formData = new FormData();
    files.forEach((file) => formData.append('images', file));
    return api.post(`/projects/${id}/gallery`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  deleteGalleryImage: (projectId: string, imageId: string) =>
    apiService.delete<any>(`/projects/${projectId}/gallery/${imageId}`),
};

export const experienceApi = {
  getAll: () => apiService.get<any[]>('/experiences'),
  getById: (id: string) => apiService.get<any>(`/experiences/${id}`),
  create: (data: any) => apiService.post<any>('/experiences', data),
  update: (id: string, data: any) => apiService.put<any>(`/experiences/${id}`, data),
  delete: (id: string) => apiService.delete<any>(`/experiences/${id}`),
};

export const skillApi = {
  getAll: () => apiService.get<any>('/skills'),
  getByCategory: (category: string) => apiService.get<any[]>(`/skills/category/${category}`),
  getById: (id: string) => apiService.get<any>(`/skills/${id}`),
  create: (data: any) => apiService.post<any>('/skills', data),
  update: (id: string, data: any) => apiService.put<any>(`/skills/${id}`, data),
  delete: (id: string) => apiService.delete<any>(`/skills/${id}`),
  updateOrder: (data: any) => apiService.put<any>('/skills/order', data),
};

export const certificationApi = {
  getAll: () => apiService.get<any[]>('/certifications'),
  getById: (id: string) => apiService.get<any>(`/certifications/${id}`),
  create: (data: any) => apiService.post<any>('/certifications', data),
  update: (id: string, data: any) => apiService.put<any>(`/certifications/${id}`, data),
  delete: (id: string) => apiService.delete<any>(`/certifications/${id}`),
};

export const socialApi = {
  getAll: () => apiService.get<any[]>('/socials'),
  getById: (id: string) => apiService.get<any>(`/socials/${id}`),
  create: (data: any) => apiService.post<any>('/socials', data),
  update: (id: string, data: any) => apiService.put<any>(`/socials/${id}`, data),
  delete: (id: string) => apiService.delete<any>(`/socials/${id}`),
  updateOrder: (data: any) => apiService.put<any>('/socials/order', data),
};

export const contactApi = {
  send: (data: any) => apiService.post<any>('/contact', data),
  getAll: (params?: any) => apiService.get<PaginatedResponse<any>>('/contact', params),
  getById: (id: string) => apiService.get<any>(`/contact/${id}`),
  markAsRead: (id: string) => apiService.put<any>(`/contact/${id}/read`),
  markAsReplied: (id: string) => apiService.put<any>(`/contact/${id}/replied`),
  delete: (id: string) => apiService.delete<any>(`/contact/${id}`),
};

export const authApi = {
  login: (credentials: { email: string; password: string }) =>
    apiService.post<any>('/auth/login', credentials),
  register: (userData: { name: string; email: string; password: string }) =>
    apiService.post<any>('/auth/register', userData),
  getMe: () => apiService.get<any>('/auth/me'),
  updatePassword: (data: { currentPassword: string; newPassword: string }) =>
    apiService.put<any>('/auth/update-password', data),
};

export default api;
