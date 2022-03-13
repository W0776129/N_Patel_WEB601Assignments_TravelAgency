import { Component } from '@angular/core';
import { Tour } from './helper-files/tour-interface';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //This parameter used for updatepage funcion
 
  constructor(public msgService: MessageService){
    
  
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

  
}
