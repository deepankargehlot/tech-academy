import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantTileComponent } from './components/restaurant-tile/restaurant-tile.component';
import { MenuTileComponent } from './components/menu-tile/menu-tile.component';



@NgModule({
  declarations: [
    RestaurantTileComponent,
    MenuTileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RestaurantTileComponent,
    MenuTileComponent
  ]
})
export class SharedModule { }
