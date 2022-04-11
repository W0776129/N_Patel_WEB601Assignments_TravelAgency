import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tour } from '../helper-files/tour-interface';
import { TourServiceService } from '../services/tour-service.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?:number;
  tItem?:Tour;

  constructor(private route: ActivatedRoute,private tourService: TourServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>{
      this.id=Number(params.get('id') ?? "0");
      this.tourService.getContentItem(this.id).subscribe(
        (c)=>{
          this.tItem = c;
          console.log("sdfsdvs");
        }
      );
    });
  }

}
