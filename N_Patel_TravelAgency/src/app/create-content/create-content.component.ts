import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import { Tour } from '../helper-files/tour-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newTourAdd: EventEmitter<Tour> = new EventEmitter<Tour>();
  newTour?: Tour;
  constructor() { }

  ngOnInit(): void {
  }

  addTour(id:string,title:string,imgURL:string,description:string,price:string,type:string,tags:string){
    this.newTour = {
      id:parseInt(id),
      title:title,
      imgURL: imgURL,
      description: description,
      price: parseInt(price),
      type : type,
      tags : tags.split(",")
    };
    this.newTourAdd.emit(this.newTour);
  }  

}
