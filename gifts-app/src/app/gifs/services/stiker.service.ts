import { effect, Injectable, signal } from '@angular/core';
import { Observable, pipe, map } from 'rxjs';
import {HttpClient}from '@angular/common/http';


import{GiphyStikerInterface}from '../interfaces/stikerGiphy.interface';
import{Stiker}from '../interfaces/stiker.interface';
import { environment } from '@environments/environment';
import { StikerMapper } from '../mapper/gif.mapper';

const loadSaveStikersFromLocalStorage = (): string[] => {

  const urls =
    localStorage.getItem('saveStikers') ?? '[]';

  return JSON.parse(urls);

}


@Injectable({
  providedIn: 'root',
})
export class StikerService 
{
SearchStiker=signal<Stiker[]>([]);
SearchgStikerArray:Stiker[]=[];



SaveUrlStikers = signal<string[]>(
  loadSaveStikersFromLocalStorage()
);


saveUrl(url:string){
  this.SaveUrlStikers.update(c=>{
    if(c.includes(url)){
      return c;
    }
  
     return [...c, url];
  })
  console.log( 'stikers guardados',this.SaveUrlStikers());
}
//efecto para guardarlos local

saveUrlsToLocalStorage = effect(() => {

  localStorage.setItem(
    'saveStikers',
    JSON.stringify(this.SaveUrlStikers())
  );
 console.log( 'stikers guardados en local');
});



SaveUrlStiker=signal<string[]>([]);
constructor(
   private http: HttpClient
){

}
SearchStikers(query:string):Observable<Stiker[]>{
  return this.http.get<GiphyStikerInterface>(`${environment.giphyUrl}/stickers/search`,{
    params:{
       api_key:environment.giphyApiKey,
       q:query,
      limit:20
    }
  }).pipe(
    map(({data})=>data),
    map((items)=>StikerMapper.mapGiphyItemsToStikerfArray(items))

 
  
  );
}

deleteUrl(url: string) {

  this.SaveUrlStikers.update(urls =>
    urls.filter(u => u !== url)
  );
  window.location.reload();
console.log('Service eliminado el ;',url);
}


}
