import { ChangeDetectionStrategy, Component,EventEmitter,inject,Input, Output } from '@angular/core';
import { StikerService } from 'src/app/gifs/services/stiker.service';

@Component({
  selector: 'gif-lits-item',
  
  templateUrl: './gif-lits-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifLitsItem {
  stikerService=inject(StikerService);
@Output() save = new EventEmitter<string>();

onClick(Url:string) {

  console.log(Url);
  this.stikerService.saveUrl(Url);
}

  @Input()
  ImageUrl='';

  @Input()
  Page:string='';
  //InmageUrl=input.required<string>()//nuevo signal

  DeleteElement(Url:string){
   console.log('item eliminado el ;',Url);
 this.stikerService.deleteUrl(Url);

  }

}
