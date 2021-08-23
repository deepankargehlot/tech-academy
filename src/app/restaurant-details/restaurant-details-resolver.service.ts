import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantDetail } from '../shared/interfaces/restaurant-detail.interface';
import { RestaurantsService } from '../shared/services/restaurants.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailsResolverService implements Resolve<RestaurantDetail> {

  constructor(private service:RestaurantsService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.getRestaurantDetails();
  }
}
