import { ChangeDetectionStrategy, Component ,computed,inject} from '@angular/core';
import { GifService } from '../../services/gifs.service';


// const imageUrls:string[]=[
// "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
// "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
// "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
// "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
// "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
// "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
// "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
// "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
// "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
// "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
// "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
// "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
// ];
@Component({
  selector: 'app-trending-page',
  
 
  templateUrl: './trending-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendingPage {

 // Images=imageUrls;//se debe hacer una propiedad en el componente
  //signal= Images=signal(imagesUrls);
  gifService=inject(GifService);//singleton si existe lo crea si no no 
//la amnera con la que hace las otros del servicio  es con return
//crea las peticiones y regresa el observable y aca es donde se mapea y se ajusta la respuesta


//propiedad para el servicio como signal computed
gifs=computed(()=>this.gifService.trendingGifs())
//o invocada desde el servicio
  //gifService=inject(GifService);
}
