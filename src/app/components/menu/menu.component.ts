import { HostListener, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavItems, topMenuItems } from 'src/app/utils/sidebar-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  changeMenuOnScroll(){
    let menu = document.querySelector('.menu-container') as HTMLElement;
    if(window.pageYOffset > menu.clientHeight){
      menu.classList.add('onScrollMenu');
    }
    else{
      menu.classList.remove('onScrollMenu')
    }
  }

  menuItems: NavItems[];

  ngOnInit() {
    this.menuItems = topMenuItems;
  }

}
