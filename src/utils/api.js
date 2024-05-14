import axios from 'axios';

const API_BASE_URL = 'https://example.com/api';

// Sample endpoints
export const getItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/items`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addItem = async (item) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/items`, item);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateItem = async (id, item) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/items/${id}`, item);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/items/${id}`);
  } catch (error) {
    throw error;
  }
};
