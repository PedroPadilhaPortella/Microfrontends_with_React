import faker from 'faker';

let cartText = `<div>You have ${faker.random.number()} in your cart.</div>`;
const devCartEl = document.querySelector('#dev-cart')
devCartEl.innerHTML = cartText