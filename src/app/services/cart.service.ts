import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem } from '../models/cart-item';
import { cartUrl } from '../config/api';
import { cartItemUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartId: string;

  constructor(private http: HttpClient) {
    this.getCurrentCart().subscribe((cart: string) => {
      this.cartId = cart;
    });
  }

  getCartItems(): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<CartItem[]>(cartItemUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result['hydra:member']) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.book['@id']) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new CartItem(item.book['@id'], item.book));
          }
        }

        return cartItems;
      })
    );
  }

  getCurrentCart(): Observable<any> {
    return this.http.get(cartUrl).pipe(
      map((result: any[]) => {
        return result['hydra:member'][0]['@id'];
      })
    );
  }

  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartItemUrl,  {book: product['@id'], cart: this.cartId});
  }
}
