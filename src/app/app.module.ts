import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowseByTagBarComponent } from './browse-by-tag-bar/browse-by-tag-bar.component';
import { TagElementComponent } from './tag-element/tag-element.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeaturedGamesComponent } from './featured-games/featured-games.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrowseByTagBarComponent,
    TagElementComponent,
    SidebarComponent,
    FeaturedGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
