import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';
import { ScreenWidth } from './utils/interfaces/screen-width';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'angular-movinit';

  isSidebarCollapsed = true;
  screenWidth = 0;

  onCollapseSidebar(data: ScreenWidth): void {
    this.screenWidth = data.screenW;
    this.isSidebarCollapsed = data.collapsed;
  }
}
