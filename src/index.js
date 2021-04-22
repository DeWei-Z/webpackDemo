import _ from 'lodash';
import './style.css';
import tx from './tx.jpg';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  const btn = document.createElement('button');
  

  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

 


  return element;
}

document.body.appendChild(component());