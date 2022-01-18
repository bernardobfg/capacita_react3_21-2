import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import "./styles.css"
export const ProductDetail = () => {
  const location = useLocation()
  const product = location.state
  return (
    <div>
      <Header />
      <div className="content">
        <h2>{product.name}</h2>
        <img src={product.image} alt="product" />
        <p>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        <button>Comprar</button>
      </div>
    </div>
  );
}