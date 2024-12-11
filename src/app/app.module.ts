import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryListComponent } from './feature/gallery/gallery-list/gallery-list.component';
import { MenuComponent } from './core/menu/menu.component';
import { HomePageComponent } from './feature/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryListComponent,
    MenuComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
