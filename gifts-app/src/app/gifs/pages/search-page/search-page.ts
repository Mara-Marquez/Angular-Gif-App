import { ChangeDetectionStrategy, Component,computed,inject, signal } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';


//Objeto literanl donde la llave sera dinamica
//de lso resultados de busqueda
//PAra hacerlo una funcion propia Record

//Record<string, Gif[]>

@Component({
  selector: 'app-search-page',
 
 
  templateUrl: './search-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage {
  gifService=inject(GifService);
  gifs=signal<Gif[]>([]);
  gifArray:Gif[]=[];
searchHistory= this.gifService.searchHistory;


  onSearch(query:string){
    console.log('la busqueda es: ',{query})
     // searchgifs=computed(()=>this.gifService.searchGifs(query))
     this.gifService.searchGifs(query).subscribe((response)=>{
      this.gifs.set(response);
console.log('Historial',this.searchHistory());

     });
  }

  DeleteHistory(){
    this.searchHistory.set({});
     localStorage.removeItem('history');
  }
//Un cache de persosyemcia 

getHistoryCount():number{
return Object.keys(this.searchHistory()).length;
}
}
