import {useState}  from "react";

export default function CartItem({
  image = "",
  title = "",
  subtitle = "",
  quantity = 1,
  deliveryInfo = "",
  freeDelivery = {},
  rating = {},
  onRemove,
  onWishlist,
  onBuy,
}) {
const [qty, setQty] = useState(quantity);
  const handleQtyChange = (e) => {
    setQty(e.target.value);
  }

  return (
    <div className="bg-white  p-3 space-y-2 mx-4 shadow-md rounded-lg font-inter">
      {/* Product Row */}
      <div className="flex gap-6 flex-row items-center mx-5">
        <img src={image} alt="product" className="w-18 h-20 object-cover" />
        <div className="flex-1 space-y-1">
          <h4 className="text-sm font-semibold">{title}Natural Almonds grown in Afg</h4>
          <p className="text-xs text-blue-800 font-medium">Thind Farms{subtitle}</p>
          {/* Rating */}
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill={i < rating ? "green" : "#d1d5db"}
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Quantity dropdown */}
      <div className="flex items-center mx-5 mt-3">
        <label htmlFor="qty" className="text-sm mr-2 font-medium">
          Qty:
        </label>
        <select
          id="qty"
          value={qty}
          onChange={handleQtyChange}
          className=" rounded px-2 py-1 text-sm"
        >
          {[1, 2, 3, 4, 5].map((q) => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </select>
      </div>

      {/* Delivery Info */}
      <div className="text-sm text-gray-700">
        <span>{deliveryInfo}Delivery by Tomorrow, Wed</span>
        <span className="px-2">|</span>
        {freeDelivery ? (
          <span className="text-green-600 font-medium">FREE Delivery</span>
        ) : (
          <span className="text-gray-400">₹40 Delivery</span>
        )}
      </div>

      {/* Buttons Row */}
      <div className="grid grid-cols-2 divide-x border-t text-sm text-center mt-2">
        <button className="py-2 cursor-pointer font-inter text-sm font-medium" >
          Remove
        </button>
        <button className="py-2 cursor-pointer font-inter text-sm font-medium">
          Add to wishlist
        </button>
      </div>
    </div>
  );
}
