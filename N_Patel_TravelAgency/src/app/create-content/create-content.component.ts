import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';

import { Tour } from '../helper-files/tour-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newTourAdd: EventEmitter<Tour> = new EventEmitter<Tour>();
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
    this.inputTitle.nativeElement.value = '';
    this.inputId.nativeElement.value = '';
    this.inputDesc.nativeElement.value = '';
    this.inputPrice.nativeElement.value = '';
    
    this.inputTag.nativeElement.value = '';
    this.inputImg.nativeElement.value = '';

    
  }  

}
