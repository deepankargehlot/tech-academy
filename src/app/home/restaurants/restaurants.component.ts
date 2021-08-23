import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubscriptionLike } from 'rxjs';
import { allRestaurantsResponse } from 'src/app/shared/interfaces/restaurant.interface';
import { RestaurantsService } from '../../shared/services/restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit, OnDestroy {

  restaurants: allRestaurantsResponse = { allRestaurants: [] };

  allRestaurants: allRestaurantsResponse = { allRestaurants: [] };

  subscriptions: SubscriptionLike[] = [];

  constructor(private service: RestaurantsService) { }

  ngOnInit(): void {
    this.getAllRestaurants();
    this.filterRestaurntsByCuisine();
    this.filterRestaurntsByCategories();
    this.sortRestaurants()
  }

  getAllRestaurants() {
    this.service.getAllRestaurants().subscribe({
      next: (result: allRestaurantsResponse) => {
        this.restaurants = result;
        this.allRestaurants = {allRestaurants: [...this.restaurants.allRestaurants]};
        this.restaurants.allRestaurants.map(ele => {
          ele.restaurantCategoryArrayForm = JSON.parse(ele.restaurantCategory);
          ele.restaurantCuisineArrayForm = JSON.parse(ele.restaurantCuisine);
        });
        console.log("ss", this.restaurants);

      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    });
  }

  filterRestaurntsByCuisine() {
    this.subscriptions.push(
      this.service.getSelectedCuisine().subscribe(selectedCuisines => {
        this.restaurants ={ allRestaurants: this.allRestaurants.allRestaurants.filter(a => 
          a.restaurantCuisineArrayForm.some(a => selectedCuisines.includes(a) ))}
      })
    )
  }

  filterRestaurntsByCategories() {
    this.subscriptions.push(
      this.service.getSelectedcategories().subscribe(selectedCategories => {
        this.restaurants ={ allRestaurants: this.allRestaurants.allRestaurants.filter(a => 
          a.restaurantCategoryArrayForm.some(a => selectedCategories.includes(a) ))}
      })
    )
  }

  sortRestaurants() {
    this.subscriptions.push(
      this.service.getSelectedSort().subscribe(selectedSort => {
        if(selectedSort === null) {
          this.restaurants = {allRestaurants: this.allRestaurants.allRestaurants}
        } else {
          this.restaurants ={ allRestaurants: this.allRestaurants.allRestaurants.sort( (x,y) => {
            return (x.isOpen === y.isOpen)? 0 : x.isOpen? -1 : 1;
          })
          }
        }
        
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}

