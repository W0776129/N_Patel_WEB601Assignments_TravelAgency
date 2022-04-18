import { ApplicationRef, Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';
import { Tour } from './helper-files/tour-interface';
import { LogUpdateService } from './log-update.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  log: any;
  //This parameter used for updatepage funcion
 
  constructor(private logService: LogUpdateService, private appRef: ApplicationRef,
    private updates: SwUpdate,
    private _snackBar: MatSnackBar
    ){
    
  
    // let Swiss : Tour;
    // Swiss={
    //   id: 2,
    //   title: "Switzerland",
    //   description: "fdggfhgjhgg",
    //   creator: "dfa",
    //   imgURL: "afadfaf",
    // };
    // this.consoleTour(Swiss);
    // this.AllTours = new TourList(Swiss);
    // console.log(this.AllTours.items);

  }
  // consoleTour(tour: Tour):string{
  //   console.log(tour.title);
  //   return tour.title;
  // }

  ngOnInit(): void {
    this.log.init();
    const appIsStable$ = this.appRef.isStable.pipe(first(isStable => isStable === true));
      const everyHour$ = interval(1 * 60 * 60 * 1000);
      const everyHourOnceAppIsStable$ =
      concat(appIsStable$, everyHour$);
      everyHourOnceAppIsStable$.subscribe(
      () => this.updates.checkForUpdate());
    }

    openSnackBar() {
      this._snackBar.openFromComponent(LogUpdateService);
    }
  
}
