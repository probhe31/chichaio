import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowseByTagBarComponent } from './browse-by-tag-bar/browse-by-tag-bar.component';
import { TagElementComponent } from './tag-element/tag-element.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GameCellComponent } from './game-cell/game-cell.component';
import { GridGameComponent } from './grid-game/grid-game.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrowseByTagBarComponent,
    TagElementComponent,
    SidebarComponent,    
    routingComponents, GameCellComponent, GridGameComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
