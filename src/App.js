import React, { useEffect, useState } from 'react';
import StoreList from './components/StoreList';
import StoreForm from './components/StoreForm';
import storeService from './services/storeService';
import './styles/styles.css';  // Import the CSS file

function App() {
  const [stores, setStores] = useState([]);
  const [newStore, setNewStore] = useState({
    name: '',
    description: '',
    location: '',
    contactInfo: '',
    operatingHours: ''
  });
  const [editingStore, setEditingStore] = useState(null);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const response = await storeService.getStores();
      setStores(response);
    } catch (error) {
      console.error("Error fetching stores: ", error);
    }
  };

  const addStore = async (storeData) => {
    try {
      await storeService.createStore(storeData);
      fetchStores(); // Refresh store list
    } catch (error) {
      console.error("Error adding store: ", error);
    }
  };

  const deleteStore = async (storeId) => {
    try {
      await storeService.deleteStore(storeId);
      fetchStores(); // Refresh store list
    } catch (error) {
      console.error("Error deleting store: ", error);
    }
  };

  const updateStore = async (store) => {
    try {
      await storeService.updateStore(store.id, store);
      fetchStores(); // Refresh store list
      setEditingStore(null); // Clear editing store
    } catch (error) {
      console.error("Error updating store: ", error);
    }
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>Shopping Mall Store Management</h1>
      </header>

      {/* Store Form */}
      <div className="container">
        <StoreForm
          addStore={addStore}
          newStore={newStore}
          setNewStore={setNewStore}
          editingStore={editingStore}
          setEditingStore={setEditingStore}
          updateStore={updateStore}
        />

        {/* Store List */}
        <StoreList
          stores={stores}
          onUpdate={setEditingStore}
          onDelete={deleteStore}
        />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Shopping Mall Management. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
