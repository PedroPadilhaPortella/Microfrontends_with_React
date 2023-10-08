import faker from 'faker';

// let cartText = `<div>You have ${faker.random.number()} in your cart.</div>`;
// const devCartEl = document.querySelector('#dev-cart')
// devCartEl.innerHTML = cartText

const mountCart = (el) => {
  let cartText = `<div>You have ${faker.random.number()} in your cart.</div>`;
  el.innerHTML = cartText
}

if(process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart')
  if(el) {
    mountCart(el);
  }
}

export { mountCart }