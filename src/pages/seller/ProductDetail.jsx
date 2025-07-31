import { useNavigate } from "react-router";
import {Carousel} from '../../components/index'

function ProductDetail() {
  const navigate = useNavigate();
  const product = {
    id: 1,
    title: "Sample Product",
    description: "This is a sample product description.",
    category: "Electronics",
    price: 9999,
    quantity: 50,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTzIcjRX78M3vOEMZlxp14eCerwEtvuukrexuX3H-l_AbNN9IjG6V3Pko0mXyzCRw2_UZ9KM7cDGL4g0fJw1G-Km2BEzja6-y9tHw37M1W5OGbPgxLt1OkC",
  };
  return (
    <div className="bg-amber-50 min-h-screen p-4 font-inter space-y-4">
      <div className="flex flex-row ">
        <svg
          onClick={() => navigate("/seller/products")}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left text-gray-700 cursor-pointer"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M5 12l4 4" />
          <path d="M5 12l4 -4" />
        </svg>
        
      </div>
<h1 className="text-xl font-bold text-gray-700 mx-2">Product Details</h1>
      <div className="flex justify-center mb-6">
        {/* <img
          src={product.image}
          alt={product.title}
          className="w-56 h-56 object-contain"
        /> */}
       
      </div>
      <Carousel className="w-full" />
      <table className="w-full text-base text-black border-collapse">
        <tbody>
          <tr>
            <td className="font-semibold w-28 py-2">Title</td>
            <td className="text-left py-2">{product.title}</td>
          </tr>
          <tr>
            <td className="font-semibold w-28 py-2">Description</td>
            <td className="text-left py-2">{product.description}</td>
          </tr>
          <tr>
            <td className="font-semibold w-28 py-2">Category</td>
            <td className="text-left py-2">{product.category}</td>
          </tr>
          <tr>
            <td className="font-semibold w-28 py-2">Price</td>
            <td className="text-left py-2">
              ₹{product.price.toLocaleString("en-IN")}.00
            </td>
          </tr>
          <tr>
            <td className="font-semibold w-28 py-2">Quantity</td>
            <td className="text-left py-2">{product.quantity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default ProductDetail;