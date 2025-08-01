import React from 'react';
import  {SellerCarousel , Button} from "../../components/index";
import { useNavigate } from 'react-router';

function ProductDetail() {
  const navigate = useNavigate();
   const product = {
    id: 1,
    title: "Casual Yellow Sneaker",
    description: "These sneakers are comfortable and stylish, perfect for everyday wear. Made with breathable material and a sturdy sole.",
    category: "Footwear",
    price: 4000,
    quantity: 1,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzIcjRX78M3vOEMZlxp14eCerwEtvuukrexuX3H-l_AbNN9IjG6V3Pko0mXyzCRw2_UZ9KM7cDGL4g0fJw1G-Km2BEzja6-y9tHw37M1W5OGbPgxLt1OkC",
  };
  return (
   <div className="bg-green-50 min-h-screen p-4">
      {/* Back Button */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="h-6 w-6 cursor-pointer text-gray-700" />
        <h2 className="text-xl font-semibold">Product Details</h2>
      </div>

      {/* Image Carousel */}
      <div className="mb-4">
        <SellerCarousel />
      </div>

      {/* Product Info */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h1>
        <p className="text-sm text-gray-500 mb-1">Category: {product.category}</p>
        <p className="text-base text-gray-700 mb-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-semibold text-green-700">₹{product.price}.00</span>
          <span className="text-gray-600 text-sm">Quantity: {product.quantity}</span>
        </div>
      </div>

      {/* Action Icons */}
      <div className="grid grid-cols-2 gap-4 text-center text-sm text-gray-700 mb-6">
        <div className="flex flex-col items-center bg-white p-3 rounded shadow">
          <div className="h-5 w-5 mb-1 text-blue-500" />
          Return Policy
        </div>
        <div className="flex flex-col items-center bg-white p-3 rounded shadow">
          <div className="h-5 w-5 mb-1 text-green-500" />
          Exchange Available
        </div>
        <div className="flex flex-col items-center bg-white p-3 rounded shadow">
          <div className="h-5 w-5 mb-1 text-red-500" />
          Cancellation
        </div>
        <div className="flex flex-col items-center bg-white p-3 rounded shadow">
          <div className="h-5 w-5 mb-1 text-yellow-600" />
          Refund Available
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
        <p className="text-gray-600 text-sm">Great product, fits well and looks great!</p>
      </div>

      {/* CTA Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t flex justify-between space-x-4">
        <Button 
        onClick={() => navigate("/buyer/cart")}
        className="flex-1 bg-yellow-500 text-white font-semibold py-2 rounded">Add to Cart</Button>
        <Button 
        onClick={() => navigate("/buyer/checkout")}
        className="flex-1 bg-green-600 text-white font-semibold py-2 rounded">Buy Now</Button>
      </div>
    </div>
  );
}

export default ProductDetail;
