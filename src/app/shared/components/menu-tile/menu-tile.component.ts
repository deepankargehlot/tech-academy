import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-menu-tile',
  templateUrl: './menu-tile.component.html',
  styleUrls: ['./menu-tile.component.scss']
})
export class MenuTileComponent implements OnInit {

  @Input() menuItem:MenuItem = null;

  constructor() { }

  ngOnInit(): void {
    
  }
}
