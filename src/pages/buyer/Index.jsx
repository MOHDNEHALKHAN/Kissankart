import { Route, Routes } from "react-router";
import Cartpage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import ProductList from "./ProductList";
import UserProfile from "./UserProfile";
import WishlistPage from "./WishlistPage";
import OrderdetailPage from "./OrderdetailPage";
import OrderPage from "./OrderPage";
import OrderFailed from "./OrderFailed";
import HelpcenterPage from "./HelpcenterPage"
import OrderSuccess from "./OrderSuccess";
import ProductDetail from "./ProductDetail";

const BuyerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />    
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/cart" element={<Cartpage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/order-detail" element={<OrderdetailPage />} />
      <Route path="/orders" element={<OrderPage />} />
      <Route path="/order-failed" element={<OrderFailed />} />
      <Route path="/help-center" element={<HelpcenterPage />} />
      <Route path="/order-success" element={<OrderSuccess />} />
       <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default BuyerRoutes;
