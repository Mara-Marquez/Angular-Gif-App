import { AfterViewInit, ChangeDetectionStrategy, Component, computed, ElementRef, inject, ViewChild , } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state-service';

@Component({
  selector: 'masonry-page',

  templateUrl: './Masonry-page.html',
 
})
export  class MasonryPage implements AfterViewInit {

  ngAfterViewInit(): void {
   
  const scrollDiv = this.scrollDivRef.nativeElement;
   // console.log(this.scrollDivRef.nativeElement);//ten pronto la vista es inicializada 
    if(!scrollDiv) return;

    //si existe
    scrollDiv.scrollTop=this.scrollStateService.trendindScrollstate();
  }


    gifService=inject(GifService);
    gifs=computed(()=>this.gifService.trendingGifs())

    scrollStateService=inject( ScrollStateService )

    //scrollDivRef=viewChild<ElementRef<HTMLDivElement>>('groupDiv')//Nuevo
    //referencia al html, el child y children sirven para tomar informacion o referencias a piezas del HTML child 1 children <1

  @ViewChild('groupDiv')
  scrollDivRef!: ElementRef<HTMLDivElement>;//trad




onScroll(enevnt:Event){
//no pasa nada por q estamos habiendo el scroll a toda la pagina no solo al elemento
//const scrollDiv=this.scrollDivRef().?NativeElement;//nuevo




  const scrollDiv = this.scrollDivRef.nativeElement;

//console.log(scrollDiv);
if(!scrollDiv)return;
//determinar el final del scroll para crgar mas
//tenemos el view point 600px el tamano del contenido q es mas grande  y el nivel de scroll como scrollHeight q permite cual es el espacio q a hecho scroll y es para hacer cargar mas

const scrollTop=scrollDiv.scrollTop;//el  questa arriba
//cuanto espacio tiene la pantalla
this.scrollStateService.trendindScrollstate.set(scrollTop);//mandamos el scroll//esto nho es recomendado por q en cualquier lugar lo pueden cambiar
//mehor hacer emtodos y propiedades para leer y escribir 

const clientHeight=scrollDiv.clientHeight;
 //El scroll posible
const scrollHight=scrollDiv.scrollHeight;
const isAtBottom=clientHeight+scrollTop+300>=scrollHight;//si sumamos y si es mayor pum esta al final, la peticion se hace antes del final 

 //console.log(scrollTop,clientHeight,scrollHight,suma);
 console.log(isAtBottom);

 if(isAtBottom){

  //Totodo cargar la pagina de gfts si tenemos la pagina  tenemos paginacion o offset  es la pagina 0 el offset es de q 20, salteandose 20 asi de 20 en 20 dependiendo del limite
  
  this.gifService.loadTrendingGifs();
 }
}
}
