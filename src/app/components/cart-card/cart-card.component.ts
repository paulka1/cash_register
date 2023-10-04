import { Component, Input } from '@angular/core';
import { CartItem, ProductI } from '../../../common/interface'
import { CartService } from '../../services/cart/cart.service'
import { buttonActionEnum } from '../../../common/enums'

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss']
})
export class CartCardComponent {

  @Input() set product(product: CartItem) {
    this._product = product
  }

  constructor(private cartService: CartService) {
  }
  _product: CartItem | undefined;

  addToCart(product: ProductI) {
    this.cartService.cart.next({product: product, buttonAction: buttonActionEnum.ADD})
  }

  removeOneFromCart(product: ProductI) {
    this.cartService.cart.next({product: product, buttonAction: buttonActionEnum.REMOVE_ONE})
  }

  removeFromCart(product: ProductI) {
    this.cartService.cart.next({product: product, buttonAction: buttonActionEnum.REMOVE})
  }
}
