import _ from 'lodash';
import './style.css';
import tx from './tx.jpg'

function component() {
  var element = document.createElement('div');
  element.classList.add('hello');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  const myIcon = new Image();
  myIcon.src = tx;

  element.appendChild(myIcon);


  return element;
}

document.body.appendChild(component());