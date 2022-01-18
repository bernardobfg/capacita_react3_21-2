import { Header } from "../../components/Header";
import "./styles.css"
export const Home = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=799&q=80"
          alt=""
        />
      </div>
    </div>
  );
}