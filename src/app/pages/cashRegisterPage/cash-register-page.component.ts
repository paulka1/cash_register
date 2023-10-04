import { Component, OnInit } from '@angular/core';
import { MenuService } from "../../services/menu/menu.service";
import { CategoryI, MenuI } from "../../../common/interface";
import { itemCategoryEnum } from "../../../common/enums";

@Component({
  selector: 'app-cash-register-page',
  templateUrl: './cash-register-page.component.html',
  styleUrls: ['./cash-register-page.component.scss']
})
export class CashRegisterPageComponent implements OnInit{

  menuInfos?: MenuI;
  menuDrink?: CategoryI;
  menuSnack?: CategoryI;
  menuFood?: CategoryI;
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

    this.menuFood = this.menuInfos?.categories.find(category => {
      return category.name === itemCategoryEnum.SANDWICH;
    });

    this.menuSnack = this.menuInfos?.categories.find(category => {
      return category.name === itemCategoryEnum.SNACKS;
    });
  }

  selectCategory(category: itemCategoryEnum) {
    this.currentItemCategory = category;
  }
}
