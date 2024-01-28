const axios = require('axios');

module.exports = {
  get: async (url, options = {}) => {
    const response = await axios.get(url, { ...options, timeout: 5000 });
    return response.data;
  },
  post: async (url, data, options = {}) => {
    try {
      const response = await axios.post(url, data, {
        ...options,
        timeout: 5000,
      });
      return response.data;
    } catch (error) {
      // Handle potential errors gracefully, e.g., using a custom error handler
      console.error('API call error:', error);
      throw error; // Re-throw to allow for further handling
    }
  },
};
