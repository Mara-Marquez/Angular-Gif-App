import { computed, effect, Injectable,signal } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { environment } from '@environments/environment';
import type {GiphyResponse} from '../interfaces/giphy.interfaces';
import type {Gif} from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';
import { JsonPipe } from '@angular/common';


const loadHistoryFromLocalStorage=()=>{
const gifsFromLocalStorage=localStorage.getItem('gifs')??'[]';//Recording<string>
const gifs=JSON.parse(gifsFromLocalStorage);
console.log('loadHistoryFromLocalStorage',gifs);
return gifs
}




@Injectable({
  providedIn: 'root',
})
export class GifService 
{
    //inyeccion de dependencia
    //private http =inject(HttpClient)//nuevo inject
 
trendingGifs=signal<Gif[]>([]);
trendingGifsArray:Gif[]=[]; //almacenar los gifts q almacenaremos como signal
trendingGifsLoading=signal(false);
private trendingPage=signal(0);//pagina es 0

SearchGifs=signal<Gif[]>([]);
SearchgGifsArray:Gif[]=[];


//arreglos donde hay 3 gifs , 3 gifs

trendingGifGroup=computed<Gif[][]>(()=>{
  //crear estructira de arreglso de 3 elementso
  const groups=[];
for(let i=0; i<this.trendingGifs().length;i+=3 )
groups.push(this.trendingGifs().slice(i,i+3));//cortar de 3 3n tres
console.log(groups);
  return groups;
})


searchHistory=signal<Record<string, Gif[]>>(loadHistoryFromLocalStorage());//para el chache//Record es un tipo genérico que sirve para definir objetos tipo diccionario / mapa.
searchHistoryKeys=computed(()=>Object.keys(this.searchHistory()))//las llaves computadas cada q cambie history se 


//load history

constructor( 
   private http: HttpClient //trad

  ){
       this.loadTrendingGifs();
  }


loadTrendingGifs(){

  //condicion
  if(this.trendingGifsLoading()) return;//para q sea uno a la vez
  this.trendingGifsLoading.set(true);//entro una sola vez
  
  //Httpclient
  this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
    params:{
      api_key:environment.giphyApiKey,
      limit:20,
      offset:this.trendingPage()*20
    },
  }).subscribe((response)=>{
    console.log('respuesta del gifts ',response);
    //response.data[0].images.original.url//mapper normal
    const gifs=GifMapper.mapGiphyItemsToGifArray(response.data);
    //previo de la signal y anadir
    //this.trendingGifs.set(gifs);
    this.trendingGifs.update(currentGifs=>[
      ...currentGifs,//exparcir 
      ...gifs

    ])
    this.trendingPage.update(p=>p+1);
    this.trendingGifsArray=gifs;

    this.trendingGifsLoading.set(false);//ya terminos de cargar
    console.log(this.trendingGifsArray);
  });
}
//observable patron de diseno donde un objeto puede estar emitiendo valores
//por q es poderosa gracias a q se conecta a js


//es mejor tener una interfaz para los datos internos
//tenemos q tener una signal para almacenar los gifts

//TAREA
searchGifs(query:string):Observable<Gif[]>{

 return  this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,{
    params:{
      api_key:environment.giphyApiKey,
      q:query,
      limit:20
    },
  }).pipe(
   // tap(response=>console.log({tap1: response.data}))
   map(({data})=>data),//se concatenan
    map((items)=>GifMapper.mapGiphyItemsToGifArray(items)),
    //History efecto secundario 
    tap(items=>{
      this.searchHistory.update((history)=>({
        ...history,
        [query.toLowerCase()]:items,
      }))//reurn implicito de otro objeto
    })
  );
    //Debemos de delegar este subscribe para que pueda regresar si no hay nadie suscrito no se hace
    //entonces usamos pipe para ya debolver todo como queremos
//pipe es para encadenar funciones para los operadores 
//map es para barrer cada elemento y regresar una transformacion lo q no onos permite etap
//lo q hacen es q transforman la emision de los obserbables y 
//que toda la logica quede en el servicio y q quede my procesada





//   subscribe((response)=>{
//     const gifs=GifMapper.mapGiphyItemsToGifArray(response.data);
// this.SearchGifs.set(gifs);
// this.SearchgGifsArray=gifs;

// console.log('searchGif signal',this.SearchGifs());
// console.log('searchGif array',this.SearchgGifsArray);
//   })
}

//Recibiendo la llave q busque de nuevo lo q se habia buscado
//previamente almacenado
//metodo
getHistoryGifs(query:string):Gif[]{
  return this.searchHistory()[query]??[];
}
//Local Storage mio

saveGiftsToLocalStorage=effect(()=>{
//console.log(`Characetr cout${this.searchHistory().length}`);
const historyString =JSON.stringify( this.searchHistory());
localStorage.setItem('gifs',historyString)
});




}
