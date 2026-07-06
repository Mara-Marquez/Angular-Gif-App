import { ChangeDetectionStrategy, Component ,Input} from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';


@Component({
  selector: 'gif-list',

  templateUrl: './gif-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifList {

  @Input()
  ImagesUrl:string[]=[];
 // ImagesUrl=input.required<string>()
@Input()
 gifs:Gif[]=[];
 holamundo(){
  console.log(this.gifs)
 }
 //gifs=input.required<Gif[]>()

   @Input()
  Page:string='';

}
