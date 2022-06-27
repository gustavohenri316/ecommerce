import { Routes, Route } from "react-router-dom";
import { ProductList } from "./pages/ProductList";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Cart } from "./pages/Cart";



export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product-list" element={<ProductList/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}