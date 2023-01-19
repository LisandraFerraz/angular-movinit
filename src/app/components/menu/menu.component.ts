import { HttpClient } from '@angular/common/http';
import { HostListener, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth-service.service';
import { NavItems, topMenuItems } from 'src/app/utils/sidebar-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  message = ''

  constructor(private route: Router, private authService: AuthService){}

  ngOnInit() {
    this.menuItems = topMenuItems;

    this.authService.getUser({withCredentials: true}).subscribe((res: any) =>{
      this.message = res.name
      console.log(res.name)
    }, err =>{
      console.log("Error caught?", err)
    })
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
