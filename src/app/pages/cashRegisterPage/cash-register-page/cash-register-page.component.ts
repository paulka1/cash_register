import { Component, OnInit } from '@angular/core';
import { MenuService } from "../../../services/menu/menu.service";
import { CategoryI, MenuI } from "../../../../common/interface";
import { itemCategoryEnum } from "../../../../common/enums";

@Component({
  selector: 'app-cash-register-page',
  templateUrl: './cash-register-page.component.html',
  styleUrls: ['./cash-register-page.component.scss']
})
export class CashRegisterPageComponent implements OnInit{

  menuInfos?: MenuI;
  menuDrink?: CategoryI;
  menuTest?: any = [{
    "name":"Boissons",
    "products":[
      {
        "id":81,
        "name":"Coca-Cola 50cl",
        "price":4,
        "tva":10,
        "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Coca-Cola"
      },
      {
        "id":72,
        "name":"Fanta 50cl",
        "price":3,
        "tva":10,
        "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Fanta"
      },
      {
        "id":63,
        "name":"Sprite 50cl",
        "price":3.5,
        "tva":20,
        "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Sprite"
      },
      {
        "id":54,
        "name":"Orangina 50cl",
        "price":3,
        "tva":20,
        "image":"https://dummyimage.com/250x250/000/fff.jpg&text=Orangina"
      }
    ]
  }];

  itemCategoryEnum = itemCategoryEnum;
  currentItemCategory: itemCategoryEnum = itemCategoryEnum.BOISSONS;

  constructor(
        private menuService: MenuService
  ) {
  }

  ngOnInit() {
    this.menuInfos = this.menuService.getMenuInfos();
    this.menuDrink = this.menuInfos?.categories.find(category => {
      return category.name === itemCategoryEnum.BOISSONS;
    });

    console.log('this.menuDrink : ', this.menuDrink)
    console.log(this.menuInfos);
  }

  selectCategory(category: itemCategoryEnum) {
    this.currentItemCategory = category;
  }
}
