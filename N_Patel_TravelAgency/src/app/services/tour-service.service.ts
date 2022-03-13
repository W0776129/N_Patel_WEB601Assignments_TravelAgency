import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { TourList } from '../helper-files/contentDb';
import {Tour} from '../helper-files/tour-interface';
import { MessageService } from './message.service'; 

@Injectable({
  providedIn: 'root'
})
export class TourServiceService {
  

  constructor(private msgService: MessageService) {}
   
    getContent(): Tour[]{
      this.msgService.add('Tour List provided');
      return TourList;

    }
    getSingleItem(id: number): Tour{
      this.msgService.add('Single Item added to top id is '+ id) ;
      return TourList[id];
    }

   
}
