import React from 'react';
import './menu.css';
import Button from './components/ButtonLink'

function Menu() {
  return (

    <header className='Menu'>
      <a href="https://fontmeme.com/calligraphy-fonts/"><img src="https://fontmeme.com/permalink/200728/ff8fdd6f1418ebe7948335cd27ae2ab0.png" alt="calligraphy-fonts" border="0" width="40%"></img></a>

      <Button as="a" className="ButtonLink" href="/" >
        Novo vídeo
      </Button>
    </header>
  );
}

export default Menu; 