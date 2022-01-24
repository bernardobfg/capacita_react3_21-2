import { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { useCart } from "../../hooks/useCart";
import { AddButton, Content } from "./styles";
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
    navigate(-1)
  }
  return (
    <div>
      <Header />
      <button onClick={handleNavigate}>Voltar</button>
      <Content>
        <h2>{product.name}</h2>
        <img src={product.image} alt="product" />
        <p>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        <AddButton onClick={handleAddToCart}>Comprar</AddButton>
      </Content>
    </div>
  );
}