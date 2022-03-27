import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tour } from '../helper-files/tour-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {

  @Output() newTourAdd: EventEmitter<Tour> = new EventEmitter<Tour>();
  @Output() updateTourAdd: EventEmitter<Tour> = new EventEmitter<Tour>();
  newTour?: Tour;
  
  constructor() { }

  ngOnInit(): void {
  }

  addTour(title:string,imgURL:string,description:string,price:string,type:string,tags:string): void{
    this.newTour = {
      //id:parseInt(id),
      title:title,
      imgURL: imgURL,
      description: description,
      price: parseInt(price),
      type : type,
      tags : tags.split(",")
    };
    this.newTourAdd.emit(this.newTour);
  }
  updateTour(id:string, title:string,imgURL:string,description:string,price:string,type:string,tags:string): void{
    this.newTour = {
      id:parseInt(id),
      title:title,
      imgURL: imgURL,
      description: description,
      price: parseInt(price),
      type : type,
      tags : tags.split(",")
    };
    this.updateTourAdd.emit(this.newTour);
  }

}
