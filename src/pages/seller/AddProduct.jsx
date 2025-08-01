import { useState } from "react";
import { Button, SellerFooter, CategorySelector } from "../../components/index";
import { useNavigate } from "react-router";

function AddProduct() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleRemoveImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use selectedSubcategory in your payload
    console.log("Chosen subcategory:", selectedSubcategory);
  };

  return (
    <div className="flex flex-col  h-screen bg-amber-50">
        <div className="flex flex-row  mx-4 my-2">
        <svg
          onClick={() => navigate("/seller/")}
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
        className="my-5 w-full px-10 flex flex-col gap-3"
      >
        <div className="">
          <label className="block text-sm font-medium text-black mb-1 ">
            Title
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="">
          <label className="block text-sm font-medium text-black mb-1">
            Description
          </label>
          <textarea
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows="4"
          ></textarea>
        </div>
        <div className="flex flex-row gap-4">
          <div className="">
            <label className="block text-sm font-medium text-black mb-1">
              Price
            </label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="">
            <label className="block text-sm font-medium text-black mb-1">
              Quantity
            </label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div className="">
          <CategorySelector
            value={selectedSubcategory}
            onChange={(subcat) => setSelectedSubcategory(subcat)}
          />
          {/* <select
            id="Category"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5"
          >
            <option value="selected"></option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select> */}
        </div>

        <div className="flex items-center justify-center w-full ">
          <label className="flex flex-col items-center justify-center  h-35 w-full border-2 border-gray-400 border-dashed rounded-lg cursor-pointer  ">
            {images.length === 0 ? (
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
                <p className="mb-2 text-md font-semibold text-black ">
                  Upload Image
                </p>
              </div>
            ) : (
              <div className="flex flex-wrap h-35 gap-2 p-2 w-full justify-start">
                {images.map((img, index) => (
                  <div key={index} className="relative inline-block h-15 w-15">
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`preview-${index}`}
                      className="h-15 w-15 object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveImage(index);
                      }}
                      className="absolute top-0 right-0  rounded-full p-1"
                      style={{ transform: "translate(30%, -30%)" }}
                      aria-label="Remove image"
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
                  </div>
                ))}
              </div>
            )}
            <input
              type="file"
              className="hidden"
              multiple
              onChange={handleImageChange}
            />
          </label>
        </div>
        <Button
          onClick={() => navigate('/seller/')}
          type="submit"
          className="bg-teal-600 text-white py-2 px-4 rounded-sm items-center justify-center"
        >
          Add Product
        </Button>
      </form>
      
    </div>
  );
}

export default AddProduct;
