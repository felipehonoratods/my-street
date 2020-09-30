import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>MinhaRua <i class="fas fa-road" /></h1>
      <p>Possui problemas locais?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          DENUNCIE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;