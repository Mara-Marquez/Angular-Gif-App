import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollStateService {
 //vamos a conservar el scroll
 trendindScrollstate=signal(0);
 //hay q encapsularla signal
 
 pagesScrollstate:Record<string,number>={
//almacenar el scroll en pas paginas
//'page1':100,
//'page2':100,
 }
}
