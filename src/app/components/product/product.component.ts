import { Component, Input } from '@angular/core';
import { ProductI } from '../../../common/interface'
import { itemCategoryEnum } from '../../../common/enums'
import { ITEM_CATEGORY } from '../../../common/constants'

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
    console.log('productType' , productType)
    const productIconTmp = ITEM_CATEGORY.find(value => value.type === productType)?.icon;
    console.log('productIconTmp : ',productIconTmp)

    this._productIcon = this.pathImg + productIconTmp;
    this._productType = productType;
    console.log('_productType : ',this._productType)
    console.log('_productIcon : ',this._productIcon)
  }

  pathImg = '/assets/img/';
  _product: ProductI | undefined;
  _productIcon: string | undefined;
  _productType: itemCategoryEnum | undefined;
}
