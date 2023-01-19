import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './shared/homepage/homepage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { AuthComponent } from './auth/auth.component';
import { TMDBInterceptor } from './utils/interceptors/tmdb.interceptor';
import { MovinitInterceptor } from './utils/interceptors/movinit-api.interceptor';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorsProviders } from './utils/interceptors/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SidebarComponent,
    MenuComponent,
    BodyContentComponent,
    AuthComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [interceptorsProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
