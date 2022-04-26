import './scss/app.scss';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

//partes
import { Cursor } from './componentesEspecial/cursor.js';
import { Reloj } from './componentesEspecial/Reloj.js';
import { Menu } from './componentesEspecial/Menu.js';

import { estilos, proyectos } from './estilos';

function App() {

  //Número del estilo usado
  const [estilo, setEstilo] = useState(0);

  //verificar si el menu esta activo
  const [menuActivo, setMenuActivo] = useState(false);

  return (
    <React.Fragment>
      <Reloj
        setEstilo={setEstilo}
        estilo={estilo}
        miEstilo={estilos[estilo]}
      />
      <Cursor estilo={'cursor ' + estilos[estilo]}/>
      <nav className={estilos[estilo] + `${menuActivo ? ' active':' no-active'}`}>
      </nav>
      <header className={estilos[estilo]}>
        <span></span>
        <h1>Gael García<span></span></h1>
        <Menu
          estilo={'menu ' + estilos[estilo]}
          menuActivo={menuActivo}
          setMenuActivo={setMenuActivo}
        />
      </header>
      <main className={estilos[estilo]}>
        <section id='seccion-1' className={estilos[estilo]}>
          <div className='principal'>
            <h2>Hola!<br></br>Soy Gael García y soy un desarrollador frond-end.</h2>
            <ul>
              <li><a href='https://github.com/'><FontAwesomeIcon icon={faGithub}/></a></li>
              <li><a href='https://github.com/'><FontAwesomeIcon icon={faLinkedin}/></a></li>
              <li><a href='https://github.com/'><FontAwesomeIcon icon={faWhatsappSquare}/></a></li>
            </ul>
            <p>Espera un momento...</p>
          </div>
        </section>
        <section id='seccion-2' className={estilos[estilo]}>
          {proyectos.map((proyecto, index) =>
            <div key={index} className='cont'>
              <img alt=' ' src={proyecto.imagen} className={'sc'+index}></img>
              <div className={'sub-cont sc'+index}>
                <div>
                  <h3>{proyecto.title}</h3>
                  <p>{proyecto.descripcion}</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;