import {  Component, inject, signal } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

interface MenuOption{
  label:string;
  sublabel:string;
  route:string;
  icon:string;
}

@Component({
  selector: 'gifs-side-menu-options',
  
  templateUrl: './gifs-side-menu-options.html',
})
export class GifsSideMenuOptions {
  gifService=inject(GifService);
  searchHistory= this.gifService.searchHistory;
  searchHistoryKeys=this.gifService.searchHistoryKeys;

  
  //RouterLinks
menuOptions:MenuOption[]=[
  {
    label:'Trending',
    sublabel:'populares',
    icon:'fa-solid fa-chart-line',
    route:'/dashboard/trending'
  },
  {
    label:'Buscador',
    sublabel:'Buscar gifs',
    icon:'fa-solid fa-magnifying-glass',
    route:'/dashboard/search'
  },

    {
    label:'Estilo Masonry',
    sublabel:'Buscar gifs',
      icon:'fa-solid fa-chart-line',
    route:'/dashboard/masonry'
  },

    {
    label:'Stikers',
    sublabel:'Buscar stikers',
      icon:'fa-regular fa-heart',
    route:'/dashboard/stikerSerch'
  },
    {
    label:'Save Stikers',
    sublabel:'Buscar stikers',
      icon:'fa-solid fa-floppy-disk',
    route:'/dashboard/stikerSave'
  },
  /*
    {
    label:'Historial',
    sublabel:'Historial de gifs',
    icon:'fa-solid fa-clock-rotate-left',
    route:'/dashboard/history'
  },
  */
  //se pueden cambiar por signals
]
//inyectar els ervicio de la busqueda de gifs y q del servicio agarrer n els erch history key y 
//crear  como el antor tag y q visualmente salga el historial 
//History()


constructor(){

}
}
