import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import Campaigns from "./components/Campaigns/Campaigns";
import CampaignsDetail from "./components/Campaigns/CampaignsDetail";
import "./App.css";
import UserPage from "./pages/Admin/UserPage";
import CategoryPage from "./pages/Admin/Categories/CategoryPage";
import UpdateCategoryPage from "./pages/Admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./pages/Admin/Categories/CreateCategoryPage";
import CreateProductPage from "./pages/Admin/Products/CreateProductPage";
import ProductPage from "./pages/Admin/Products/ProductPage";
import UpdateProductPage from "./pages/Admin/Products/UpdateProductPage";
import CouponPage from "./pages/Admin/Coupons/CouponPage";
import CreateCouponPage from "./pages/Admin/Coupons/CreateCouponPage";
import UpdateCouponPage from "./pages/Admin/Coupons/UpdateCouponPage";
import Success from "./pages/Success";
import OrderPage from "./pages/Admin/OrderPage";
import DashboardPage from "./pages/Admin/DashboardPage";
import CategoryDetailsPage from "./pages/CategoryDetailsPage";
import AdminMessages from "./pages/Admin/Contact/AdminMessages";

function App() {
  
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      <Route path="/categories/:id" element={<CategoryDetailsPage />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/campaigns/:id" element={<CampaignsDetail />} />
      <Route path="/success" element={<Success />} />
      <Route path="/admin/*">
        <Route index element={<DashboardPage />} />
        <Route path="messages" element={<AdminMessages />} />
        <Route path="users" element={<UserPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products/update/:id" element={<UpdateProductPage />} />
        <Route path="coupons" element={<CouponPage />} />
        <Route path="coupons/create" element={<CreateCouponPage />} />
        <Route path="coupons/update/:id" element={<UpdateCouponPage />} />
        <Route path="orders" element={<OrderPage />} />
      </Route>
    </Routes>
  );
}

export default App;