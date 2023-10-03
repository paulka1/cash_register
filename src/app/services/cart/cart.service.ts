import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { ProductI } from '../../../common/interface'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new Subject<ProductI>();

}
