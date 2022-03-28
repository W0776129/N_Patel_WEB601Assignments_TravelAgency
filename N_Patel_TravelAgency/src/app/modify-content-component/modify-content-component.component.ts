import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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
  @ViewChild('title')
  inputTitle!: { nativeElement: { value: string; }; };

  @ViewChild('id')
  inputId!: { nativeElement: { value: string; }; };
  
  @ViewChild('description')
  inputDesc!: { nativeElement: { value: string; }; };
  
  @ViewChild('price')
  inputPrice!: { nativeElement: { value: string; }; };
  
  @ViewChild('type')
  inputType!: { nativeElement: { value: string; }; };
  
  @ViewChild('tags')
  inputTag!: { nativeElement: { value: string; }; };

  @ViewChild('imageUrl')
  inputImg!: { nativeElement: { value: string; }; };
  
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
    this.inputTitle.nativeElement.value = '';
    this.inputId.nativeElement.value = '';
    this.inputDesc.nativeElement.value = '';
    this.inputPrice.nativeElement.value = '';
    
    this.inputTag.nativeElement.value = '';
    this.inputImg.nativeElement.value = '';
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
    this.inputTitle.nativeElement.value = '';
    this.inputId.nativeElement.value = '';
    this.inputDesc.nativeElement.value = '';
    this.inputPrice.nativeElement.value = '';
    
    this.inputTag.nativeElement.value = '';
    this.inputImg.nativeElement.value = '';
  }

}
