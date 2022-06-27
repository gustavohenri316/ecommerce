import { Routes, Route } from "react-router-dom";
import { ProductList } from "./pages/ProductList";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Register } from "./pages/Register";



export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product-list" element={<ProductList/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}