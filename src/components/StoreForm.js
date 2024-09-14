import React, { useEffect } from 'react';

function StoreForm({ addStore, newStore, setNewStore, editingStore, setEditingStore, updateStore }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStore({ ...newStore, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newStore.name && newStore.description && newStore.location && newStore.contactInfo && newStore.operatingHours) {
      if (editingStore) {
        updateStore({ ...newStore, id: editingStore.id });
      } else {
        addStore(newStore);
      }
      setNewStore({ name: '', description: '', location: '', contactInfo: '', operatingHours: '' }); // Clear form after submission
      setEditingStore(null); // Clear editing store
    } else {
      alert('All fields are required!');
    }
  };

  useEffect(() => {
    if (editingStore) {
      setNewStore({
        name: editingStore.name,
        description: editingStore.description,
        location: editingStore.location,
        contactInfo: editingStore.contactInfo,
        operatingHours: editingStore.operatingHours
      });
    }
  }, [editingStore, setNewStore]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>{editingStore ? 'Edit Store' : 'Add New Store'}</h2>
        <input
          type="text"
          name="name"
          placeholder="Store Name"
          value={newStore.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newStore.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newStore.location}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="contactInfo"
          placeholder="Contact Info"
          value={newStore.contactInfo}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="operatingHours"
          placeholder="Operating Hours"
          value={newStore.operatingHours}
          onChange={handleInputChange}
        />
        <button type="submit">{editingStore ? 'Update Store' : 'Add Store'}</button>
      </form>
    </div>
  );
}

export default StoreForm;
