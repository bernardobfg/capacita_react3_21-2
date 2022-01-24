import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { Container, Menu, Title } from './styles';


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
  return (
    <Container>
      <Title>Magalí</Title>
      <nav>
        <Menu>
          {items.map((item,index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
          <li>{
            cart.reduce((acc, item) => acc + item.amount, 0)
          }</li>

        </Menu>
      </nav>
    </Container>
  );
}