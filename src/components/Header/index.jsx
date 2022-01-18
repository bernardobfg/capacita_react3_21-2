import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';


import './styles.css';

export const Header = ()  => {

  const items = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Produtos',
      path: '/produtos'
    },
    {
      name: 'Carrinho',
      path: '/carrinho'
    }
  ]
  const { cart } = useCart();
  console.log(cart)
  return (
    <header>
      <h1 id="title">Magalí</h1>
      <nav>
        <ul>
          {items.map((item,index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
          <li>{
            cart.reduce((acc, item) => acc + item.amount, 0)
          }</li>

        </ul>
      </nav>
    </header>
  );
}