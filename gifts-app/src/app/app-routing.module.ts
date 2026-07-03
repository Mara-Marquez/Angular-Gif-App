import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardPage} from './gifs/pages/dashboard-page/dashboard-page';
import{TrendingPage  }from './gifs/pages/trending-page/trending-page';
import { SearchPage } from './gifs/pages/search-page/search-page';
import { GifHistoryPage } from './gifs/pages/gif-history-page/gif-history-page';
import { MasonryPage } from './gifs/pages/Masonry-page/Masonry-page';
import { StikerPage } from './gifs/pages/stiker-page/stiker-page';
import { SaveStikersPage } from './gifs/pages/stiker-page/save-stikers-page/save-stikers-page';


const routes: Routes = [
 

{path: 'dashboard',component: DashboardPage,
  children:[
    {path: 'trending',component: TrendingPage},
      {path: 'masonry',component: MasonryPage},
    {path: 'search',component: SearchPage},
     {path: 'history/:key',component: GifHistoryPage},//routing dinamico
     {path:'stikerSerch',component:StikerPage},
       {path:'stikerSave',component:SaveStikersPage},
    {path:'**' , redirectTo:'trending'},

  ]
},


   {path:'**' , redirectTo:'dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
