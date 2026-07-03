import { ChangeDetectionStrategy, Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'gif-lits-item',
  
  templateUrl: './gif-lits-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifLitsItem {
  
@Output() save = new EventEmitter<string>();

onClick(Url:string) {

  console.log(Url);
}

  @Input()
  ImageUrl='';
  //InmageUrl=input.required<string>()//nuevo signal
}
