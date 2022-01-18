import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { ProductDetail } from "../pages/ProductDetail"
import { Products } from "../pages/Products"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/detalhes-produto" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}