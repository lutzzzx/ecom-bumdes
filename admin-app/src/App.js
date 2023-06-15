import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Enquiries from './pages/Enquiries';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import CategoryList from './pages/CategoryList';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import AddCategory from './pages/AddCategory';
import ViewEnq from './pages/ViewEnq';
import ViewOrder from './pages/ViewOrder';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='enquiries/:id' element={<ViewEnq />} />
          <Route path='orders' element={<Orders />} />
          <Route path='order/:id' element={<ViewOrder />} />
          <Route path='customers' element={<Customers />} />
          <Route path='category-list' element={<CategoryList />} />
          <Route path='category' element={<AddCategory />} />
          <Route path='category/:id' element={<AddCategory />} />
          <Route path='product-list' element={<ProductList />} />
          <Route path='product' element={<AddProduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
