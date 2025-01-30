import React from 'react';
import './EcommercePage.css';
import Chatbot from './Chatbot'; // Ensure this is the correct path to your Chatbot component

function EcommercePage() {
  return (
    <div className="ecommerce-page">
      <h1>Welcome to Our E-Commerce Store</h1>

      <div className="product-list">
        <div className="product">
          <img src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product 1" />
          <h3>Product 1</h3>
          <p>$10.00</p>
          <button>Add to Cart</button>
        </div>
        <div className="product">
          <img src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product 2" />
          <h3>Product 2</h3>
          <p>$20.00</p>
          <button>Add to Cart</button>
        </div>
        <div className="product">
          <img src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product 3" />
          <h3>Product 3</h3>
          <p>$30.00</p>
          <button>Add to Cart</button>
        </div>
        <div className="product">
          <img src="https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Product 4" />
          <h3>Product 4</h3>
          <p>$40.00</p>
          <button>Add to Cart</button>
        </div>
      </div>

      {/* Include the Chatbot component */}
      <Chatbot />
    </div>
  );
}

export default EcommercePage;
