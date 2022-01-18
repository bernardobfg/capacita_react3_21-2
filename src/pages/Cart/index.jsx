import { Header } from "../../components/Header";
import { useCart } from "../../hooks/useCart"
import "./styles.css"
export const Cart = () => {
  const { cart, handleChange } = useCart()
  return (
    <div>
      <Header />
      <h2>Carrinho</h2>
      <div className="content">
        {
          cart.map((item) => {
            return (
              <div key={item.id} className="cartItem">
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
              </div>
            )
          })
        }
        <h3>
          Total:
          <span>
            {
              cart.reduce((acc, item) => acc + item.amount *item.price, 0)
            }
          </span>
        </h3>
      </div>
    </div>
  )
}