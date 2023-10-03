import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service'
import { CartItem, ProductI } from '../../../common/interface'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  constructor(private cartService: CartService) {
  }

  productList: CartItem[] = [];

  ngOnInit() {
    this.cartService.cart.subscribe({
      next:(product) => {
        this.addToCart(product)
      }
    })
  }

  addToCart(product: ProductI) {
    const existingItemIndex = this.productList.findIndex(item => item.product.id === product.id);

    if (existingItemIndex !== -1) {
      this.productList[existingItemIndex].quantity++;
    } else {
      this.productList.push({ product, quantity: 1 });
    }
    console.log('acrt: ', this.productList)
  }

  removeFromCart(index: number) {
    if (index >= 0 && index < this.productList.length) {

      if (this.productList[index].quantity > 1) {
        this.productList[index].quantity--;
      } else {
        this.productList.splice(index, 1);
      }
    }
  }
}
