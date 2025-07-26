import { Route, Routes } from 'react-router';
import Dashboard from './Dashboard';
import AddProduct from './AddProduct';
import SellerProfile from './SellerProfile'
import OrderDashboard from './OrderDashboard';
import InvoiceGenerator from './InvoiceGenerator';
import ViewProduct from './ViewProduct'
import EditProduct from './EditProduct'

const SellerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add-product" element={<AddProduct />} />
        <Route path="/profile" element={<SellerProfile />} />
      <Route path="/orders" element={<OrderDashboard />} />
      <Route path="/invoice" element={<InvoiceGenerator />} />
      <Route path="/products" element={<ViewProduct />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
    </Routes>
  );
};

export default SellerRoutes;