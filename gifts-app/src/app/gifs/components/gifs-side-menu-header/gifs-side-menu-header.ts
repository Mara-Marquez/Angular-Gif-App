import { ChangeDetectionStrategy, Component, EnvironmentInjector } from '@angular/core';
import { environment } from '@environments/environment';//normal
//import { environment } from '../../../../environments/environment';//tradicional
@Component({
  selector: 'gifs-side-menu-header',
  
  templateUrl: './gifs-side-menu-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuHeader {
envs=environment;

}
