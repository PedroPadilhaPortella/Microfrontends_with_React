import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartIndex';

const containerProducts = document.querySelector('#container-products')
const containerCart = document.querySelector('#container-cart')

mountProducts(containerProducts);
mountCart(containerCart);