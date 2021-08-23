import { Component } from '@angular/core';
import { RestaurantsService } from './shared/services/restaurants.service';


interface item {
  name:string;
  image:string;
  navigateTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  sidebarOpened = false;
  filterSidebarOpened = false;

  cuisine  = ["All","Fast food","American food","Pizza","Asian","Dessert","Mexican","Breakfast"];

  sortBy= ["open"]

  selectedSortBy:string = null; 

  selecetdCuisine = ["All"];

  items:item[] = [
    {
      name:'Home',
      image:'assets/img/icons/home.svg',
      navigateTo:''
    },
    {
      name:'Orders',
      image:'assets/img/icons/orders.svg',
      navigateTo:'/home'
    },
    {
      name:'Notification',
      image:'assets/img/icons/notification.svg',
      navigateTo:'/home'
    },
    {
      name:'Help & Support',
      image:'assets/img/icons/help.svg',
      navigateTo:'/home'
    },
    {
      name:'Settings',
      image:'assets/img/icons/settings.svg',
      navigateTo:'/home'
    }
  ]

  constructor(private service:RestaurantsService) { }

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  toggleFilterSidebar() {
    this.filterSidebarOpened = !this.filterSidebarOpened;
  }

  closeFilterSidebar() {
    this.filterSidebarOpened = false;
  }

  toggleCuisine(item:string) {
    if(this.selecetdCuisine.includes(item)) {
      this.selecetdCuisine.splice(this.selecetdCuisine.indexOf(item),1);
    } else {
      this.selecetdCuisine.push(item)
    }
    if(this.selecetdCuisine.length === 0 || this.selecetdCuisine.includes('All') ) {
      this.service.setselectedCuisine([...this.cuisine]);
    } else {
      this.service.setselectedCuisine(this.selecetdCuisine);
    }

    
    
  }

  toggleSort(item:string) {
    if(item === this.selectedSortBy) {
      this.selectedSortBy = null
    } else {
      this.selectedSortBy = item
    }
    this.service.setselectedSort(this.selectedSortBy)
  }

}

