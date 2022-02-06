import { Component, Input, OnInit } from '@angular/core';

import { Tour } from '../helper-files/tour-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input() tourItem?: Tour

  constructor() {
    
   }

  ngOnInit(): void {

  }

}
