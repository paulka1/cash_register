import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { CartItem, CartSubject } from '../../../common/interface'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new Subject<CartSubject>();

  public updateTotalCost(productList: CartItem[]) {
    return productList.reduce((acc, item) => {
      return acc + (item.product.price * item.quantity);
    }, 0)
  }
}
