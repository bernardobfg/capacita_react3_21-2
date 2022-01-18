import React from 'react';
import { Link } from 'react-router-dom';


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
    }
  ]

  return (
    <header>
      <h1>Magalí</h1>
      <nav>
        <ul>
          {items.map((item,index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}

        </ul>
      </nav>
    </header>
  );
}