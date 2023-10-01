import { Injectable } from '@angular/core';
import Menu from '../../../assets/menu.json';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getMenuInfos() {
    return Menu;
  }
}
