import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StikerService } from 'src/app/gifs/services/stiker.service';

@Component({
  selector: 'save-stikers-page',
  
 
  templateUrl: './save-stikers-page.html',
  
})
export class SaveStikersPage {

  stikerService=inject(StikerService)
  constructor( ){

  }
  saveUrls=this.stikerService.SaveUrlStikers();
  
}
