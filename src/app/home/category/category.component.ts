import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/shared/services/restaurants.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private service:RestaurantsService) { }

  ngOnInit(): void {
  }

  categories  = ["Baked","Sweet","Hot Dish","Fast food","Salads"];

  selecetdCategories:string[] = [];

  toggleCategory(item:string) {
    if(this.selecetdCategories.includes(item)) {
      this.selecetdCategories.splice(this.selecetdCategories.indexOf(item),1);
    } else {
      this.selecetdCategories.push(item)
    }
    if(this.selecetdCategories.length === 0 || this.selecetdCategories.includes('All') ) {
      this.service.setselectedCategories([...this.categories]);
    } else {
      this.service.setselectedCategories(this.selecetdCategories);
    }
    
  }

}
