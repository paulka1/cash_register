import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashRegisterPageComponent } from './pages/cashRegisterPage/cash-register-page/cash-register-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CashRegisterPageComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    CommonModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
