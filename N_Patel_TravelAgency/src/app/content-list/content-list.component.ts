import { Component, OnInit } from '@angular/core';
import { Tour } from '../helper-files/tour-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  temp = false;
  itsAvailable = "";
  itsNotAvailable = "";

  title = 'Patel Travel';
  tourList: Tour[];
  constructor() {
    this.tourList = [{
      id:0,
      title:'Singapore',
      description:'5 days 4 night all including dinner breakfast and lunch.',
      imgURL: 'http://cdn.cnn.com/cnnnext/dam/assets/191212182124-04-singapore-buildings.jpg',
      price:1150,
      type: "Honeymoon",
      tags:['honeymoon','50% discount','Couple Fav']
    },{
      id:1,
      title:'Maldivs',
      description:'4 days 3 night, Breakfast included.',
      imgURL: 'https://www.brides.com/thmb/SpYbYIB3jvpeZR7ErzqhyeE-wKw=/500x350/filters:no_upscale():max_bytes(200000):strip_icc()/SunsetLagoonVillaBirdseyeview-68c2cfd7eb464d2a96dfa02f8696b93f.jpg',
      price:999,
      type: "Honeymoon",
      tags:['honeymoon','30% discount','Couple Fav']
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
      price:1998,
      type: "cultural",
      tags:['family trip','10% discount','Nature lover']
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
    {
      id:6,
      title:'Rome',
      description:'4 days 3 night, Breakfast Included.',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg',
      price:1450,
      type: "cultural"
    },
    {
      id:7,
      title:'London',
      description:'4 days 3 night, Breakfast Included.',
      imgURL: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg',
      price:1990,
      type: "cultural"
    },
  ];
   }

  ngOnInit(): void {
  }

  updatePage(cardNameOnTheTypescriptSide: string): void {
    
   
    this.tourList.forEach(t => {
      if (t.title == cardNameOnTheTypescriptSide ){
        this.temp = true;
      }
    });
    if(this.temp){
      cardNameOnTheTypescriptSide = cardNameOnTheTypescriptSide+" is available in list.";
      this.itsAvailable = cardNameOnTheTypescriptSide;
      this.itsNotAvailable = "";

    }else{
      cardNameOnTheTypescriptSide = cardNameOnTheTypescriptSide+" is not available in list.";
      this.itsNotAvailable = cardNameOnTheTypescriptSide;
      this.itsAvailable = "";
    }
    this.temp = false;
    
  }

}
