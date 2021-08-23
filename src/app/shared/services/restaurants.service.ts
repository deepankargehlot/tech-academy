import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MenuItem } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  selectedCuisine:BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  selectedCategories:BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  selectedSort:BehaviorSubject<string> = new BehaviorSubject<string>(null);

  mockData:MenuItem[] = [
    {
      itemName:'Chicken Grill',
      itemCategory:'Baked',
      itemCost:50,
      itemPhoto:'assets/img/chicken-grill.png',
      id:1
    },
    {
      itemName:'Char-Broiled Chicken Shish',
      itemCategory:'Hot Dish',
      itemCost:50,
      itemPhoto:'assets/img/chicken-sish.png',
      id:1
    },{
      itemName:'Natural Vegetable Rice',
      itemCategory:'Hot Dish',
      itemCost:50,
      itemPhoto:'assets/img/rice.png',
      id:1
    },{
      itemName:'Pizza',
      itemCategory:'Hot Dish',
      itemCost:50,
      itemPhoto:'assets/img/chicken-grill.png',
      id:1
    },{
      itemName:'Cake',
      itemCategory:'Sweet',
      itemCost:50,
      itemPhoto:'assets/img/chicken-grill.png',
      id:1
    },{
      itemName:'Gulab jamun',
      itemCategory:'Sweet',
      itemCost:50,
      itemPhoto:'assets/img/chicken-grill.png',
      id:1
    },{
      itemName:'Burger',
      itemCategory:'Hot Dish',
      itemCost:50,
      itemPhoto:'assets/img/chicken-grill.png',
      id:1
    },{
      itemName:'Paneer Kolhapuri',
      itemCategory:'Hot Dish',
      itemCost:50,
      itemPhoto:'assets/img/chicken-grill.png',
      id:1
    },
  ]

  // @TO-DO token should not be hardcoded
  token = "34303304-5475-4d63-9352-0d24ed631b37"

  httpHeaders = new HttpHeaders().set("Authorization", "Bearer " + this.token);

  // should come from configuration
  baseUrl = "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1"

  constructor(private http:HttpClient) { }

  getAllRestaurants():Observable<any> {
    return this.http.get(this.baseUrl + "/allRestaurants",{headers:this.httpHeaders})
  }


  getRestaurantDetails() {
    return this.http.get(this.baseUrl + "/restaurantDetails",{headers:this.httpHeaders})
  }

  getAllMenuItems():Observable<any> {
    return of(this.mockData)
  }


  getSelectedCuisine() {
    return this.selectedCuisine.asObservable();
  }

  setselectedCuisine(items:string[]) {
    this.selectedCuisine.next(items);
  }

  getSelectedcategories() {
    return this.selectedCategories.asObservable();
  }

  setselectedCategories(items:string[]) {
    this.selectedCategories.next(items);
  }

  getSelectedSort() {
    return this.selectedSort.asObservable();
  }

  setselectedSort(items:string) {
    this.selectedSort.next(items);
  }
}
