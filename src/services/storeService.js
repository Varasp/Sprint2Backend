const API_URL = 'http://localhost:8082/api/stores';  // Ensure the backend is running

const getStores = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch stores');
  }
  return await response.json();
};

const createStore = async (storeData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(storeData),
  });
  if (!response.ok) {
    throw new Error('Failed to create store');
  }
  return await response.json();
};

const deleteStore = async (storeId) => {
  const response = await fetch(`${API_URL}/${storeId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete store');
  }
  // No body returned on successful delete
};

const updateStore = async (storeId, storeData) => {
  const response = await fetch(`${API_URL}/${storeId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(storeData),
  });
  if (!response.ok) {
    throw new Error('Failed to update store');
  }
  return await response.json();
};

const storeService = { getStores, createStore, deleteStore, updateStore };

export default storeService;
