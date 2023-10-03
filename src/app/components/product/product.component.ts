import { Component, Input } from '@angular/core';
import { ProductI } from '../../../common/interface'
import { itemCategoryEnum } from '../../../common/enums'
import { ITEM_CATEGORY } from '../../../common/constants'
import { CartService } from '../../services/cart/cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() set product(product: ProductI){
    this._product = product;
  }

  @Input() set productType(productType: itemCategoryEnum){
    /*const productIconTmp = ITEM_CATEGORY.find(value => value.type === productType)?.icon;
    this._productIcon = this.pathImg + productIconTmp;*/
    this._productType = productType;
  }

  constructor(private cartService: CartService) {
  }

  pathImg = '/assets/img/';
  _product: ProductI | undefined;
  _productIcon: string | undefined;
  _productType: itemCategoryEnum | undefined;

  addToCart(product: ProductI) {
    this.cartService.cart.next(product)
  }
}
