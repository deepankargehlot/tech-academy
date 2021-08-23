import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantDetailsRoutingModule } from './restaurant-details-routing.module';
import { RestaurantDetailsComponent } from './restaurant-details.component';
import { RouterModule } from '@angular/router';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RestaurantDetailsComponent,
    MenuItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RestaurantDetailsRoutingModule
  ]
})
export class RestaurantDetailsModule { }
