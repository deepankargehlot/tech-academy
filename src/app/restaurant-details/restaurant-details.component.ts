import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantDetailElement } from '../shared/interfaces/restaurant-detail.interface';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {

  resstaurantInfo:RestaurantDetailElement;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
        this.resstaurantInfo = 
        data.restaurantInfo.restaurantDetails
        .filter( (a:RestaurantDetailElement) => a.id == this.activatedRoute.snapshot.params['id'])[0];
    });
    this.resstaurantInfo.restaurantImage
  }


}
