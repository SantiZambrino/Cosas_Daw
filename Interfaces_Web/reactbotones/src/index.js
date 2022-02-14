import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";

function clikme() {
    const btns = document.getElementsByClassName('btns')
    console.log({btns})
    const bd = document.body;
    let numero = Math.floor(Math.random() * 4) + 1;
    switch (numero) {
        case 1:  bd.style.backgroundColor = 'blue'
            break;
        case 2: bd.style.backgroundColor =  'green'            
            break;
        case 3: bd.style.backgroundColor = 'yellow'
            break;
        case 4: bd.style.backgroundColor = 'orange'
            break;
    }
}


function tick() {
    const element = (
      <div>
        <h1>Hora de react</h1>
        <h2>Son las {new Date().toLocaleTimeString()}.</h2>
        <div className='divBotones'>
        <input type='button' value='enviar' className='btns' onClick={clikme}></input>
        <input type='button' value='enviar' className='btns' onClick={clikme}></input>
        <input type='button' value='enviar' className='btns' onClick={clikme}></input>
        <input type='button' value='enviar' className='btns' onClick={clikme}></input>
        </div>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));}
  
  setInterval(tick, 1000);
  
  