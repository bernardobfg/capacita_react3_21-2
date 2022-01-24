import { Header } from "../../components/Header";
import { useCart } from "../../hooks/useCart"
import { CartItem, Content } from "./styles";
export const Cart = () => {
  const { cart, handleChange } = useCart()
  return (
    <div>
      <Header />
      <h2>Carrinho</h2>
      <Content>
        {
          cart.map((item) => {
            return (
              <CartItem key={item.id}>
                <h3>{item.name}</h3>
                <p>Quantidade: <strong>{item.amount}</strong></p>
                <p>Total: <strong>{(item.price * item.amount).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong></p>
                <div>
                  <button
                    className="smallBtn"
                    onClick={() => handleChange(item, 1)}
                  >
                    +
                  </button>
                  <button
                    className="smallBtn"
                    onClick={() => handleChange(item, -1)}
                  >
                    -
                  </button>
                </div>
              </CartItem>
            )
          })
        }
        <h3>
          Total:
          <span>
            {
              cart.reduce((acc, item) => acc + item.amount *item.price, 0).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            }
          </span>
        </h3>
      </Content>
    </div>
  )
}