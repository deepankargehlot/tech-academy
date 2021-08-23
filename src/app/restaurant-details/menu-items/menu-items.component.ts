import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/interfaces/menu.interface';
import { RestaurantsService } from 'src/app/shared/services/restaurants.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

  menuItems:MenuItem[] = [];

  constructor(private service:RestaurantsService) { }

  ngOnInit(): void {
    this.service.getAllMenuItems().subscribe(menu => {
      this.menuItems = menu;
    })
  }

}
