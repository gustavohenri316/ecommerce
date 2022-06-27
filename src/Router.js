import { Routes, Route } from "react-router-dom";
import { ProductList } from "./pages/ProductList";
import { Home } from "./pages/Home";



export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product-list" element={<ProductList/>}/>
    </Routes>
  )
}