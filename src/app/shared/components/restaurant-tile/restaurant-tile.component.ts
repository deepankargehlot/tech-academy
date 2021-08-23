import { Component, Input, OnInit } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant.interface';

@Component({
  selector: 'app-restaurant-tile',
  templateUrl: './restaurant-tile.component.html',
  styleUrls: ['./restaurant-tile.component.scss']
})
export class RestaurantTileComponent implements OnInit {

  @Input() restaurant:Restaurant = null;

  constructor() { }

  ngOnInit(): void {
    this.restaurant.restaurantImage
  }

}
