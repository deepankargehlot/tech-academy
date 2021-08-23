import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    RestaurantsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
