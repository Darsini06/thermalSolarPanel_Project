import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add auth token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle errors
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        
        // If 401 and not already retrying
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            
            try {
                const refreshToken = localStorage.getItem('refresh_token');
                if (refreshToken) {
                    const response = await axios.post(`${API_URL}/api/refresh`, {
                        refresh_token: refreshToken
                    });
                    
                    localStorage.setItem('auth_token', response.data.access_token);
                    originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;
                    return api(originalRequest);
                }
            } catch (refreshError) {
                console.error('Token refresh failed:', refreshError);
                // Clear tokens and redirect to login
                localStorage.removeItem('auth_token');
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('user_name');
                window.location.href = '/login';
            }
        }
        
        return Promise.reject(error);
    }
);

export const authAPI = {
    register: (userData) => api.post('/api/register', userData),
    login: (credentials) => api.post('/api/login', credentials),
    getProfile: () => api.get('/api/profile'),
    verifyToken: () => api.get('/api/verify-token'),
     saveLinks: (data) => api.post('/drive-links/', data),
    getMyLinks: () => api.get('/drive-links/my-links'),
    generateReport: (data) => api.post('/drive-links/generate-report', data),
    getMyReports: () => api.get('/drive-links/reports/my-reports'),
    getAllReports: () => api.get('/drive-links/reports'),
    getReportById: (id) => api.get(`/drive-links/reports/${id}`),
    getReportStats: () => api.get('/drive-links/reports/stats'),
};

export default api;