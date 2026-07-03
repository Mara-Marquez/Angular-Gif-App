import { Injectable, signal } from '@angular/core';
import { Observable, pipe, map } from 'rxjs';
import {HttpClient}from '@angular/common/http';


import{GiphyStikerInterface}from '../interfaces/stikerGiphy.interface';
import{Stiker}from '../interfaces/stiker.interface';
import { environment } from '@environments/environment';
import { StikerMapper } from '../mapper/gif.mapper';

@Injectable({
  providedIn: 'root',
})
export class StikerService 
{
SearchStiker=signal<Stiker[]>([]);
SearchgStikerArray:Stiker[]=[];

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
}
