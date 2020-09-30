import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Confira as áreas que buscamos denúncias!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/iluminacao.jpg'
              text='Problemas voltados para área da iluminação pública local'
              label='Iluminação'
              path='/services'
            />
            <CardItem
              src='images/infraestrutura.jpg'
              text='Problemas voltados para área da infraestrutura'
              label='Infraestrutura'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/saneamento.png'
              text='Problemas voltados para área de saneamento básico'
              label='Saneamento'
              path='/services'
            />
            <CardItem
              src='images/seguranca.jpg'
              text='Problemas voltados para área da segurança pública'
              label='Segurança'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;