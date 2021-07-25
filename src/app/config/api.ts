import { environment } from 'src/environments/environment';

// export const baseUrl = environment.production ? 'https://api.prod.com' : 'http://localhost:3000'
export const baseUrl = 'http://localhost:8000/api';
export const productsUrl = baseUrl + '/books';
export const cartUrl = baseUrl + '/carts';
export const cartItemUrl = baseUrl + '/cart_items';
