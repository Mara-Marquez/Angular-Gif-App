import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
//paginas
import { AppComponent } from './app.component';
import { DashboardPage } from './gifs/pages/dashboard-page/dashboard-page';
import{TrendingPage  }from './gifs/pages/trending-page/trending-page';
import { SearchPage } from './gifs/pages/search-page/search-page';
import { GifsSideMenuHeader } from './gifs/components/gifs-side-menu-header/gifs-side-menu-header';
import { GifsSideMenuOptions } from './gifs/components/gifs-side-menu-options/gifs-side-menu-options';
import { GifsSideMenu } from './gifs/components/gifs-side-menu/gifs-side-menu';
import { GifLitsItem } from './gifs/components/gif-list/gif-lits-item/gif-lits-item';
import { GifList } from './gifs/components/gif-list/gif-list';
import { GifHistoryPage } from './gifs/pages/gif-history-page/gif-history-page';
import { MasonryPage } from './gifs/pages/Masonry-page/Masonry-page';
import{SaveStikersPage} from './gifs/pages/stiker-page/save-stikers-page/save-stikers-page';
import{StikerPage} from './gifs/pages/stiker-page/stiker-page';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
     DashboardPage ,
     TrendingPage,
     SearchPage ,
     GifsSideMenuHeader,
     GifsSideMenuOptions,
     GifsSideMenu ,
     GifLitsItem,
     GifList,
     GifHistoryPage,
     MasonryPage,
     SaveStikersPage,
     StikerPage

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
   
  ],
  
providers: [
  { provide: LocationStrategy, useClass: HashLocationStrategy }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

