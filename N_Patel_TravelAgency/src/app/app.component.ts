import { Component } from '@angular/core';
import { Tour } from './helper-files/tour-interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Patel Travel';
  tourList: Tour[];
  constructor(){
    this.tourList = [{
      id:0,
      title:'Singapore',
      description:'5 days 4 night all including dinner breakfast and lunch.',
      imgURL: 'http://cdn.cnn.com/cnnnext/dam/assets/191212182124-04-singapore-buildings.jpg',
      price:1150
    },{
      id:1,
      title:'Maldivs',
      description:'4 days 3 night, Breakfast included.',
      imgURL: 'https://www.brides.com/thmb/SpYbYIB3jvpeZR7ErzqhyeE-wKw=/500x350/filters:no_upscale():max_bytes(200000):strip_icc()/SunsetLagoonVillaBirdseyeview-68c2cfd7eb464d2a96dfa02f8696b93f.jpg',
      price:999
    },
    {
      id:2,
      title:'Switzerland',
      description:'7 days 6 night, Breakfast included.',
      imgURL: 'https://www.planetware.com/photos-large/CH/switzerland-matterhorn.jpg',
      price:1450
    },
    {
      id:3,
      title:'India',
      description:'10 days 10 night, all including dinner breakfast and lunch.',
      imgURL: 'https://i.natgeofe.com/k/42e832f5-fd48-43ff-b338-091bdf4048ca/india-tajmahal_16x9.jpg',
      price:1998
    },
    {
      id:4,
      title:'Cancun',
      description:'3 days 2 night, all including dinner breakfast and lunch.',
      imgURL: 'https://expertvagabond.com/wp-content/uploads/cancun-things-to-do-guide.jpg',
      price:730
    },
    {
      id:5,
      title:'Las Vegas',
      description:'5 days 4 night, Breakfast Included.',
      imgURL: 'http://res.cloudinary.com/simpleview/image/upload/v1497480003/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg',
      price:1250
    },
  ];
  
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
