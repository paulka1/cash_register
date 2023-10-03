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
  total: number = 0;

  ngOnInit() {
    this.cartService.cart.subscribe({
      next:(data: { product: ProductI, buttonAction: any }) => {

        if (data.buttonAction === 'ADD') {
          this.addToCart(data.product)
        } else if (data.buttonAction === 'REMOVE_ONE') {
          const indexToRemove = this.productList.findIndex(item => item.product.id === data.product.id);
          if (indexToRemove !== -1) {
            this.removeOneFromCart(indexToRemove);
          }
        } else {
          const indexToRemove = this.productList.findIndex(item => item.product.id === data.product.id);
          if (indexToRemove !== -1) {
            this.removeFromCart(indexToRemove);
          }
        }
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
    this.updateTotalCost();
  }

  removeOneFromCart(index: number) {
    if (index >= 0 && index < this.productList.length) {

      if (this.productList[index].quantity > 1) {
        this.productList[index].quantity--;
      } else {
        this.productList.splice(index, 1);
      }
      this.updateTotalCost();
    }
  }

  removeFromCart(index: number) {
    if (index >= 0 && index < this.productList.length) {

      if (this.productList[index].quantity >= 1) {
        this.productList.splice(index, 1);
      }
      this.updateTotalCost();
    }
  }

  private updateTotalCost() {
    this.total = this.productList.reduce((acc, item) => {
      return acc + (item.product.price * item.quantity);
    }, 0);
  }
}
