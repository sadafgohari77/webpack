import * as _ from 'lodash';
import "./style.scss";

function component() {
  const container = document.createElement('div');
  container.style.display="flex"
  container.style.flexDirection="column"
  const element = document.createElement('h2');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  const elementTag=document.createElement('a')
  var linkText = document.createTextNode("go to home");
  elementTag.appendChild(linkText);
  elementTag.title = "home"
  elementTag.href = "/home.html"
  container.appendChild(element);

  container.appendChild(elementTag);
  return container;
}

document.body.appendChild(component());