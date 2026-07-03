import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
@Component({
  selector: 'gif-history-page',
  templateUrl: './gif-history-page.html',
 
})
export class GifHistoryPage {
    gifService=inject(GifService);

  // query=inject(ActivatedRoute).params.subscribe(params=>{
  //   console.log({params['query']});
  // });

key=toSignal(
inject(ActivatedRoute).params.pipe(
  map(params=>params['key'])

)
);//de obserbablea signal
  //ahora es observable da valores dependendo de la emision de los parametros
  //se debe de subscribir  a laos cambios por q se 
gifsByKey=computed(()=>{
  return  this.gifService.getHistoryGifs(this.key());
});//unico return es arreglo de gifs por medio de signal

}
