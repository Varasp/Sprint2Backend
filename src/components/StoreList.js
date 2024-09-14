import React from 'react';

function StoreList({ stores, onUpdate, onDelete }) {
  return (
    <div className="container">
      <h2>Available Stores</h2>
      {stores.length > 0 ? (
        stores.map((store) => (
          <div key={store.id} className="store">
            <div style={{ display: "flex" }}>
              <h3>{store.name}</h3>
              <button
                onClick={() => onUpdate(store)}
                style={{ marginLeft: "250px" }}
              >
                Update
              </button>
              <button
                onClick={() => onDelete(store.id)}
                style={{marginLeft: "20px" }}
              >
                Delete
              </button>
            </div>
            <p>{store.description}</p>
            <p>{store.location}</p>
            <p>{store.contactInfo}</p> {/* Display contactInfo */}
            <p>{store.operatingHours}</p> {/* Display operatingHours */}
          </div>
        ))
      ) : (
        <p className="no-stores">No stores available.</p>
      )}
    </div>
  );
}

export default StoreList;
