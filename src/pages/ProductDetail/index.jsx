import { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { useCart } from "../../hooks/useCart";
import "./styles.css"
export const ProductDetail = () => {
  const location = useLocation()
  const { id } = useParams()
  const navigate = useNavigate()
  const product = location.state
  const {handleChange} = useCart()
  useEffect(() => {
    //get data from api
    console.log(id)
  },[id])
  const handleAddToCart = () => {
    handleChange(product, 1)
  }
  const handleNavigate =() =>{
    navigate("/carrinho")
  }
  return (
    <div>
      <Header />
      <button onClick={handleNavigate}>Voltar</button>
      <div className="content">
        <h2>{product.name}</h2>
        <img src={product.image} alt="product" />
        <p>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        <button onClick={handleAddToCart} className="addButton">Comprar</button>
      </div>
    </div>
  );
}