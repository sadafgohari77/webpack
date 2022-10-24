import * as _ from 'lodash';
import "./style.scss";

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Home', 'page'], ' ');
  
 

  return element;
}

document.body.appendChild(component());