import { Component, OnInit } from '@angular/core';
import { TourList } from '../helper-files/contentDb';
import { Tour } from '../helper-files/tour-interface';
import { TourServiceService } from '../services/tour-service.service';


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
  singleTour: Tour | undefined;

  
  constructor(private tourService : TourServiceService) {
    this.tourList = [];
  

  let ourPromise = new Promise((success, fail) => {
    let testPass = false;
    if (testPass) {
      success("Success was achieved!");
    }
    else {
      fail("Failure :(");
    }
  });

  console.log("First console log");

  ourPromise
    .then(function (successMessage) {
      console.log("The promise succeeded and came back with the following message: ", successMessage);
    })
    .catch(function (failureMessage) {
      console.log("The promise failed and came back with the following message: ", failureMessage);
    });

  console.log("Fourth console log");

  let getStuff = async function () {
    return "stuff";
  }
  // function async getStuffUsingOldFunctionDefinition(): string{
  //   return "stuff";
  // }
  let getTheSameStuff = async function () {
    return "Similar stuff";
  }

  //different way to represent functions
  let getAllTheStuff = async () => {
    const theFirstStuff = getStuff();
    const theSecondStuff = getTheSameStuff();
    //returns both promises
    return await Promise.all([theFirstStuff, theSecondStuff]);
  }
  getAllTheStuff().then((value) => {
    console.log("First value from the getAllTheStuff method: ", value[0]);
    console.log("Second value from the getAllTheStuff method: ", value[1]);
  });

}

  ngOnInit(): void {
    this.tourList = this.tourService.getContent();

    // this.tourService.getContentObs().subscribe(TourList=>this.tourList = TourList);
    // this.tourService.getContentObs().subscribe(TourList=>{
    //   return this.tourList = TourList;
    // });

    this.singleTour = this.tourService.getSingleItem(5);
    console.log(this.singleTour);

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

  addTourToList(newTour : Tour){
 
    this.tourList.push(newTour);
    this.tourList = Object.assign([], this.tourList);
    this.tourList = [...this.tourList];
    console.log("new item added successfully.")
  }

}
