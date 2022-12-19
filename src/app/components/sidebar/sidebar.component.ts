import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ScreenWidth } from 'src/app/utils/interfaces/screen-width';
import { genderItems, NavItems } from 'src/app/utils/sidebar-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() onCollapseSidebar: EventEmitter<ScreenWidth> = new EventEmitter();
  collapsed = false;
  screenW = 0;

  arrayGenders: NavItems[];

  ngOnInit() {
    this.arrayGenders = genderItems;
    this.screenW = window.innerWidth;
  }

  collapseSidebar() {
    this.collapsed = !this.collapsed;
    this.onCollapseSidebar.emit({
      collapsed: this.collapsed,
      screenW: this.screenW,
    });
  }
}
