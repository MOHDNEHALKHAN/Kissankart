import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { Button,  CategorySelector } from "../../components/index";

// Mock API for frontend testing
const api = {
  getProduct: async (id) => {
    // Simulate a product object
    return {
      id,
      title: "Sample Product",
      description: "This is a sample description.",
      price: "100",
      quantity: "10",
      subcategory: "Wheat",
      images: [
        {
          id: "1",
          url: "https://ugc.futurelearn.com/uploads/images/3f/96/3f9634f9-12e1-4eb6-a537-c661579dfdfc.jpg",
        },
        {
          id: "2",
          url: "https://ugc.futurelearn.com/uploads/images/3f/96/3f9634f9-12e1-4eb6-a537-c661579dfdfc.jpg",
        },
      ],
    };
  },
  updateProduct: async (id, payload) => {
    // Simulate a successful update
    return { success: true };
  },
};

function EditProduct() {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [existingImages, setExistingImages] = useState([]); // URLs/IDs
  const [newImages, setNewImages] = useState([]);

  // Track which existing images to keep
  const [imagesToKeep, setImagesToKeep] = useState(new Set());

  // Load product on mount
  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await api.getProduct(productId);
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setQuantity(data.quantity);
        setSelectedSubcategory(data.subcategory);
        setExistingImages(data.images || []);
        setImagesToKeep(new Set(data.images.map((img) => img.id)));
      } catch (err) {
        console.error("Failed to load product", err);
      }
    }
    fetchProduct();
  }, [productId]);

  // Handle new image uploads
  const handleNewImageChange = (e) => {
    const files = Array.from(e.target.files);
    setNewImages((prev) => prev.concat(files));
  };

  // Remove a new image before upload
  const removeNewImage = (idx) => {
    setNewImages((prev) => prev.filter((_, i) => i !== idx));
  };

  // Toggle whether to keep an existing image
  const toggleKeepImage = (imgId) => {
    setImagesToKeep((prev) => {
      const copy = new Set(prev);
      if (copy.has(imgId)) copy.delete(imgId);
      else copy.add(imgId);
      return copy;
    });
  };

  // Handle form submit for update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title,
      description,
      price,
      quantity,
      subcategory: selectedSubcategory,
      imagesToKeep: Array.from(imagesToKeep),
      newImages, // file objects
    };
    try {
      await api.updateProduct(productId, payload);
      navigate("/seller/products"); // adjust path as needed
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <div className="relative w-full flex flex-col h-screen bg-amber-50">
      <div className="flex flex-row  ml-4 mt-4">
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
      <form
        onSubmit={handleSubmit}
        className="my-2 w-full px-10 flex flex-col gap-4"
      >
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows={4}
            required
          />
        </div>

        {/* Price & Quantity */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-black mb-1">
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-black mb-1">
              Quantity
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
        </div>

        {/* CategorySelector */}
        <CategorySelector
          value={selectedSubcategory}
          onChange={setSelectedSubcategory}
        />

        {/* Images Section - Matching AddProduct.jsx Design */}
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center h-35 w-full border-2 border-gray-400 border-dashed rounded-lg cursor-pointer">
            {existingImages.length === 0 && newImages.length === 0 ? (
              // Empty state - Same as AddProduct
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-photo fill-teal-600"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8.813 11.612c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.986 4.986l.094 .083a1 1 0 0 0 1.403 -1.403l-.083 -.094l-1.292 -1.293l.292 -.293l.106 -.095c.457 -.38 .918 -.38 1.386 .011l.108 .098l4.674 4.675a4 4 0 0 1 -3.775 3.599l-.206 .005h-12a4 4 0 0 1 -3.98 -3.603l6.687 -6.69l.106 -.095zm9.187 -9.612a4 4 0 0 1 3.995 3.8l.005 .2v9.585l-3.293 -3.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-.307 .306l-2.293 -2.292l-.15 -.137c-1.256 -1.095 -2.85 -1.097 -4.096 -.017l-.154 .14l-5.307 5.306v-9.585a4 4 0 0 1 3.8 -3.995l.2 -.005h12zm-2.99 5l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" />
                </svg>
                <p className="mb-2 text-md font-semibold text-black">
                  Upload Image
                </p>
              </div>
            ) : (
              // Images preview - Existing + New combined
              <div className="flex flex-wrap h-35 gap-2 p-2 w-full justify-start">
                {/* Existing Images */}
                {existingImages.map((img) => (
                  <div
                    key={`existing-${img.id}`}
                    className="relative inline-block h-15 w-15"
                  >
                    <img
                      src={img.url}
                      alt="existing-image"
                      className={`h-15 w-15 object-cover rounded border ${
                        imagesToKeep.has(img.id) ? "" : "opacity-50 grayscale"
                      }`}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleKeepImage(img.id);
                      }}
                      className="absolute top-0 right-0 rounded-full p-1"
                      style={{ transform: "translate(30%, -30%)" }}
                      aria-label={
                        imagesToKeep.has(img.id) ? "Remove image" : "Keep image"
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`icon icon-tabler icons-tabler-filled fill-gray-400 hover:fill-gray-500 ${imagesToKeep.has(
                          img.id
                        )}`}
                      >
                        {imagesToKeep.has(img.id) ? (
                          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m3.6 5.2a1 1 0 0 0 -1.4 .2l-2.2 2.933l-2.2 -2.933a1 1 0 1 0 -1.6 1.2l2.55 3.4l-2.55 3.4a1 1 0 1 0 1.6 1.2l2.2 -2.933l2.2 2.933a1 1 0 0 0 1.6 -1.2l-2.55 -3.4l2.55 -3.4a1 1 0 0 0 -.2 -1.4" />
                        ) : (
                          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m1 5v4.5l3 2l-1 1.5l-4-2.5v-5.5z" />
                        )}
                      </svg>
                    </button>
                    {/* Status indicator */}
                    <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white text-xs px-1 rounded-tr">
                      {imagesToKeep.has(img.id) ? "Keep" : "Remove"}
                    </div>
                  </div>
                ))}

                {/* New Images */}
                {newImages.map((img, index) => (
                  <div
                    key={`new-${index}`}
                    className="relative inline-block h-15 w-15"
                  >
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`new-preview-${index}`}
                      className="h-15 w-15 object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeNewImage(index);
                      }}
                      className="absolute top-0 right-0 rounded-full p-1"
                      style={{ transform: "translate(30%, -30%)" }}
                      aria-label="Remove new image"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-xbox-x fill-gray-400 hover:fill-gray-500"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10m3.6 5.2a1 1 0 0 0 -1.4 .2l-2.2 2.933l-2.2 -2.933a1 1 0 1 0 -1.6 1.2l2.55 3.4l-2.55 3.4a1 1 0 1 0 1.6 1.2l2.2 -2.933l2.2 2.933a1 1 0 0 0 1.6 -1.2l-2.55 -3.4l2.55 -3.4a1 1 0 0 0 -.2 -1.4" />
                      </svg>
                    </button>
                    {/* New image indicator */}
                    <div className="absolute bottom-0 left-0 bg-green-600 text-white text-xs px-1 rounded-tr">
                      New
                    </div>
                  </div>
                ))}
              </div>
            )}

            <input
              type="file"
              className="hidden"
              multiple
              onChange={handleNewImageChange}
              accept="image/*"
            />
          </label>
        </div>
        <Button
          onClick={() => navigate('/seller/products')}
          type="submit"
          className="bg-teal-600 text-white py-2 px-4 rounded-sm"
        >
          Update Product
        </Button>
      </form>
    </div>
  );
}

export default EditProduct;
