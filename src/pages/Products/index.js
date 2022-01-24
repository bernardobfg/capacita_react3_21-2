import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { Product, ProductList } from "./styles"
export const Products = () => {

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 1000,
      image: "https://picsum.photos/id/1/200/300"
    },
    {
      id: 2,
      name: "Product 2",
      price: 2000,
      image: "https://picsum.photos/id/2/200/300"
    },
    {
      id: 3,
      name: "Product 3",
      price: 3000,
      image: "https://picsum.photos/id/3/200/300"
    },
    {
      id: 4,
      name: "Product 4",
      price: 4000,
      image: "https://picsum.photos/id/4/200/300"
    },
  ]

  return (
    <div>
      <Header />
      <ProductList>
        {products.map(product => (
          <Product key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <Link to={`/detalhes-produto/${product.id}`} state={product}>
              Ver detalhes
            </Link>
            <p>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
          </Product>))}
      </ProductList>
    </div>
  )
}