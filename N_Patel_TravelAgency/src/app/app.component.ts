import { Component } from '@angular/core';
import{Tour} from 'src/app/helper-files/tour-interface';
import { TourList } from './helper-files/tour-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'N_Patel_TravelAgency';
  AllTours: TourList; 
  constructor(){
    let Swiss : Tour;
    Swiss={
      id: 2,
      title: "Switzerland",
      description: "fdggfhgjhgg",
      creator: "dfa",
      imgURL: "afadfaf",
    };
    this.consoleTour(Swiss);
    this.AllTours = new TourList(Swiss);
    console.log(this.AllTours.items);

  }
  consoleTour(tour: Tour):string{
    console.log(tour.title);
    return tour.title;
  }
  
}
