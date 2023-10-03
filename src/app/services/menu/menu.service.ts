import { Injectable } from '@angular/core';
import Menu from '../../../assets/menu.json';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getMenuInfos() {
    return Menu;
  }
}
