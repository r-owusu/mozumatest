// API client for frontend integration
// Supports both Create React App (REACT_APP_*) and Vite (VITE_*) environment variables
// To use this in your app:
// 1. Import the functions: import { getHello, getProfile } from './api';
// 2. Call them in your components or other modules
// 3. Set REACT_APP_API_URL or VITE_API_URL in your .env file

// Get API base URL from environment variables
// Supports both CRA (REACT_APP_API_URL) and Vite (VITE_API_URL) conventions
const getApiBaseUrl = () => {
  // Check for Vite environment variable first (import.meta.env)
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // Fallback to Create React App environment variable
  // In CRA, process.env is injected at build time, not runtime
  try {
    // eslint-disable-next-line no-undef
    if (process && process.env && process.env.REACT_APP_API_URL) {
      // eslint-disable-next-line no-undef
      return process.env.REACT_APP_API_URL;
    }
  } catch {
    // process is not available in this environment
  }
  
  // Default fallback
  return 'http://localhost:3001';
};

const API_BASE_URL = getApiBaseUrl();

// Generic fetch wrapper with error handling
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include', // Include cookies for session-based auth
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    // Handle non-2xx responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
    }
    
    // Parse JSON response
    const data = await response.json();
    return data;
  } catch (error) {
    // Re-throw with additional context
    throw new Error(`API request failed: ${error.message}`);
  }
};

// API Functions

/**
 * Get hello message from the backend
 * @returns {Promise<Object>} Hello response data
 */
export const getHello = async () => {
  return apiRequest('/api/hello');
};

/**
 * Get user profile (requires authentication)
 * @param {string} token - Bearer token for authentication
 * @returns {Promise<Object>} User profile data
 */
export const getProfile = async (token) => {
  if (!token) {
    throw new Error('Token is required for profile request');
  }
  
  return apiRequest('/api/profile', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};

// Export the base URL for debugging/testing
export const API_URL = API_BASE_URL;

// Example usage:
// 
// import { getHello, getProfile } from './api';
// 
// // Simple hello request
// try {
//   const hello = await getHello();
//   console.log(hello.message);
// } catch (error) {
//   console.error('Failed to get hello:', error.message);
// }
// 
// // Profile request with token
// try {
//   const profile = await getProfile('your-jwt-token-here');
//   console.log('User:', profile.username);
// } catch (error) {
//   console.error('Failed to get profile:', error.message);
// }