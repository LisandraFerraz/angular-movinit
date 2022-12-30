import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './shared/homepage/homepage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { AuthComponent } from './admin/auth/auth.component';
import { TMDBInterceptor } from './utils/interceptors/tmdb.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SidebarComponent,
    MenuComponent,
    BodyContentComponent,
    AuthComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserModule, HttpClientModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TMDBInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
