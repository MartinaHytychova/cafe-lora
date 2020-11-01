import './index.html';
import './style.css';
import { Layer } from './Layer';

//====================== MENU ===========================//

// zachytit elementy
const navbar = document.querySelector('#nav-btn');
const navbarItems = document.querySelectorAll('.nav-item');
const nav = document.querySelector('nav');

// otevřít/zavřít menu přes button
navbar.addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

// skrýt menu přes kliknutí na položku v menu
for (let i = 0; i < navbarItems.length; i++) {
  const navigation = navbarItems[i];
  navigation.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
  });
}

//====================== ORDER ===========================//

// zachytit elementy pro objednávku
const orderButton = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');

// globální proměnná s Boolean hodnotou
let ordered = true;

// na kliknutí vybrat kafe nebo zrušit objednávku
orderButton.addEventListener('click', () => {
  if (ordered) {
    orderButton.innerHTML = 'Zrušit';
    ordered = false;
  } else {
    orderButton.innerHTML = 'Objednat';
    ordered = true;
  }
  drinkCup.classList.toggle('drink__cup--selected');
});

//====================== COFEE PRODUCTS/INGREDIENCES ===========================//

// testovací položka pro komponentu
const layer = {
  color: '#feeeca',
  label: 'mléčná pěna',
};

// zachytit element, kam vložím HTML komponentu
const product = document.querySelector('.drink__info');
product.appendChild(Layer(layer));
