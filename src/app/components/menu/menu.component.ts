import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavItems, topMenuItems } from 'src/app/utils/sidebar-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: NavItems[];

  ngOnInit() {
    this.menuItems = topMenuItems;
  }
}
