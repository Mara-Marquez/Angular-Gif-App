import { ChangeDetectionStrategy, Component,Input } from '@angular/core';

@Component({
  selector: 'gif-lits-item',
  
  templateUrl: './gif-lits-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifLitsItem {


  @Input()
  ImageUrl='';
  //InmageUrl=input.required<string>()//nuevo signal
}
