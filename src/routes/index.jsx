import { Route, BrowserRouter, Routes } from "react-router-dom"
import { Cart } from "../pages/Cart"
import { Home } from "../pages/Home"
import { ProductDetail } from "../pages/ProductDetail"
import { Products } from "../pages/Products"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/detalhes-produto/:id" element={<ProductDetail />} />
        <Route path="/carrinho" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}