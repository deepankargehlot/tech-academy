import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailsResolverService } from './restaurant-details-resolver.service';
import { RestaurantDetailsComponent } from './restaurant-details.component';

const routes: Routes = [
  {
    path:':id',
    resolve:{
      restaurantInfo:RestaurantDetailsResolverService
    },
    component:RestaurantDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantDetailsRoutingModule { }
