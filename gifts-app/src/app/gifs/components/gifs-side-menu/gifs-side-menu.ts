import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'gifs-side-menu',
  
  templateUrl: './gifs-side-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenu {}
