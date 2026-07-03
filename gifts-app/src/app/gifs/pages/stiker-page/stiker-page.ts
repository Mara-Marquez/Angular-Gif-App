import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { StikerService } from '../../services/stiker.service';
import { Stiker } from '../../interfaces/stiker.interface';

@Component({
  selector: 'stiker-page',

 
  templateUrl: './stiker-page.html',
 
})
export class StikerPage {

  stikerService=inject(StikerService);
  stikers=signal<Stiker[]>([]);


  onSearch(query:string){
    console.log('la busqueda de stiker es',query);
    this.stikerService.SearchStikers(query).subscribe((response)=>
    {
   this.stikers.set(response);
   console.log('response de stikers',response);
    });
  }
}
