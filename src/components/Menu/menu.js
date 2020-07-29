import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import Button from '../components/ButtonLink'

function Menu() {
  return (

    <header className='Menu'>
      <Link to="/"><img src="https://fontmeme.com/permalink/200728/ff8fdd6f1418ebe7948335cd27ae2ab0.png" alt="calligraphy-fonts" border="0" width="40%"></img></Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video" >
        Novo vídeo
      </Button>
    </header>
  );
}

export default Menu; 