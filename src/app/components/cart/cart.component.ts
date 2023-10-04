import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service'
import { CartItem, ProductI } from '../../../common/interface'
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component'
import { buttonActionEnum } from '../../../common/enums'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  constructor(
    private cartService: CartService,
    protected dialog: MatDialog
  ) {
  }

  productList: CartItem[] = [];
  total: number = 0;

  ngOnInit() {
    this.cartService.cart.subscribe({
      next:(data: { product: ProductI, buttonAction: string }) => {

        if (data.buttonAction === buttonActionEnum.ADD) {
          this.addToCart(data.product)
        } else if (data.buttonAction === buttonActionEnum.REMOVE_ONE) {
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
    this.total = this.cartService.updateTotalCost(this.productList)
  }

  removeOneFromCart(index: number) {
    if (index >= 0 && index < this.productList.length) {

      if (this.productList[index].quantity > 1) {
        this.productList[index].quantity--;
      } else {
        this.productList.splice(index, 1);
      }
      this.total = this.cartService.updateTotalCost(this.productList)
    }
  }

  removeFromCart(index: number) {
    if (index >= 0 && index < this.productList.length) {

      if (this.productList[index].quantity >= 1) {
        this.productList.splice(index, 1);
      }
      this.total = this.cartService.updateTotalCost(this.productList)
    }
  }

  pay() {
    this.dialog.open(DialogComponent, {
      data: {
        body: 'Votre commande a bien été pris en compte !',
        title: 'Félicitation !',
        productList: this.productList
      }
    })

    this.productList = [];
    this.total = 0;
  }
}
