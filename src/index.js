import './index.html';
import './style.css';
import { Drink } from './Drink';

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

//====================== COFEE PRODUCTS ===========================//

// zachytit element, kam vložím komponentu Drink
const product = document.querySelector('.drinks-list');

fetch(`http://cafelora.kodim.cz/api/drinks`)
  .then((response) => response.json())
  .then((drinks) => {
    for (let j = 0; j < drinks.length; j++) {
      product.appendChild(Drink(drinks[j]));
    }
  });
