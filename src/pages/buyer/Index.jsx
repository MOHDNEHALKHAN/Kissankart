import { Route, Routes } from "react-router";
import Cart from "./Cart";
import Checkout from "./Checkout";
import ProductList from "./ProductList";
import UserProfile from "./UserProfile";
import Wishlist from "./Wishlist";
import Orderdetail from "./Orderdetail";
import Order from "./Order";
import OrderFailed from "./OrderFailed";
import Helpcenter from "./Helpcenter"
import OrderSuccess from "./OrderSuccess";
import ProductDetail from "./ProductDetail";

const BuyerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />    
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/order-detail" element={<Orderdetail />} />
      <Route path="/orders" element={<Order />} />
      <Route path="/order-failed" element={<OrderFailed />} />
      <Route path="/help-center" element={<Helpcenter />} />
      <Route path="/order-success" element={<OrderSuccess />} />
       <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default BuyerRoutes;
