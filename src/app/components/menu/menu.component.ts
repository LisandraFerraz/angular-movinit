import { HostListener, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavItems, topMenuItems } from 'src/app/utils/sidebar-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private route: Router){}

  ngOnInit() {
    this.menuItems = topMenuItems;
  }

  hidetItems(){
    if(this.route.url == '/login'){
      return 'hide-items'
    }
    return ''
  }

  adjustItems(){
    if(this.route.url == '/login'){
      return 'adjust-items'
    }
    return ''
  }

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
}
