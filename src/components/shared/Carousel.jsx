import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import wheat from "../../assets/wheat.jpg";
import corn from "../../assets/corn.jpg";
import sugarcane from "../../assets/sugarcane.jpg";
import apple from "../../assets/apple.jpg";


const bannerSlides = [
  { id: 1, img: wheat, title: "Wheat Seeds", desc: "Now at 50% off" },
  { id: 2, img: corn, title: "Corn Seeds", desc: "Get 30% Discount" },
  { id: 3, img: sugarcane, title: "Sugarcane", desc: "Get 30% Discount" },
  { id: 4, img: apple, title: "Apples", desc: "Get 30% Discount" },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {bannerSlides.map((slide) => (
        <div key={slide.id} className="bg-yellow-300 h-40 px-0">
          <div className="flex h-full">
            <div className="w-1/2 h-full">
              <img
                className="h-full w-full object-cover"
                src={slide.img}
                alt={slide.title}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center px-4">
              <h2 className="text-2xl font-bold mb-1">{slide.title}</h2>
              <p className="text-base">{slide.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;


//  <img
//           src={slide.img}
//           alt={slide.title}
//           className=" h-full w-full object-cover"
//         />
//         <div className="bg-gray-300">
//         <h2 className="text-2xl font-bold mb-1">{slide.title}</h2>
//         <p className="text-base">{slide.desc}</p>
//         </div>