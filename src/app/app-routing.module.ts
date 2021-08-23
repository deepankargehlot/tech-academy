import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const homeModule = () => import('./home/home.module').then(m => m.HomeModule);
const restaurantDetailsModule = () => import('./restaurant-details/restaurant-details.module').then(m => m.RestaurantDetailsModule)

const routes: Routes = [
  {
    path: '',
    loadChildren: homeModule
  },
  {
    path: 'restaurant',
    loadChildren: restaurantDetailsModule
  },
  {
    path:'**',
    redirectTo:'',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
