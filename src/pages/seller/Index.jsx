import { Route, Routes } from 'react-router';
import Dashboard from './Dashboard';
import AddProduct from './AddProduct';
import SellerProfile from './SellerProfile'
import OrderDashboard from './OrderDashboard';
import InvoiceGenerator from './InvoiceGenerator';
import AllProduct from './AllProduct'
import EditProduct from './EditProduct'
import HelpCenter from './HelpCenter';
import OrderDescription from './OrderDescription'
import ProductDetail from './ProductDetail';

const SellerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/profile" element={<SellerProfile />} />
      <Route path="/orders" element={<OrderDashboard />} />
      <Route path="/invoice" element={<InvoiceGenerator />} />
      <Route path="/products" element={<AllProduct />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/order-description/:id" element={<OrderDescription />} />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default SellerRoutes;