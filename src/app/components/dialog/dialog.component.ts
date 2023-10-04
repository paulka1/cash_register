import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { MatDialogI } from '../../../common/interface'
import { CartService } from '../../services/cart/cart.service'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : MatDialogI,
    private cartService: CartService
  ) {
    console.log(data.productList)
    this.total = this.cartService.updateTotalCost(data.productList)
  }

  total: number = 0;

  onNoClick() {
    this.dialogRef.close()
  }
}
