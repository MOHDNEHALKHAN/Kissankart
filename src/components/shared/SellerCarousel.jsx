import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import wheat from "../../assets/wheat.jpg";
import corn from "../../assets/corn.jpg";
import sugarcane from "../../assets/sugarcane.jpg";
import apple from "../../assets/apple.jpg";


const ProductImages = [
  { id: 1, img: wheat },
  { id: 2, img: corn },
  { id: 3, img: sugarcane },
  { id: 4, img: apple },
];

const SellerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {ProductImages.map((image) => (
        <div key={image.id} className="flex justify-center h-50">
          <img
            src={image.img}
            alt={`Product ${image.id}`}
            className="object-contain h-64"
          />
        </div>
      ))}
    </Slider>
  );
};

export default SellerCarousel;