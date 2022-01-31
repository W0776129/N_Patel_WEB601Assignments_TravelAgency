import { Component, OnInit } from '@angular/core';

import { Tour } from '../helper-files/tour-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  India : Tour;
  Thailand: Tour;
  UK : Tour;
  constructor() {
    this.India = {
      id: 1,
      title: "India",
      description: "ewrwreht",
      creator: "dfa",
      imgURL: "afadfaf",

    };
    this.Thailand = {
      id: 3,
      title: "Thailand",
      description: "3 night",
      creator: "dfa",
      imgURL: "afadfaf",

    };
    this.UK = {
      id: 4,
      title: "United Kingdom",
      description: "4night",
      creator: "dfa",
      imgURL: "afadfaf",

    };
   }

  ngOnInit(): void {
  }

}
