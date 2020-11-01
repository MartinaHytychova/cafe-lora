import './style.css';

// komponenta pro layer
export const Layer = (props) => {
  const layerElm = document.createElement('div');
  layerElm.setAttribute('class', 'layer');
  layerElm.innerHTML = `
    <div class="layer__color" style="background-color: ${props.color}"></div>
    <div class="layer__label">${props.label}</div>`;
  return layerElm;
};
