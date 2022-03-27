import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { TourList } from '../helper-files/contentDb';
import {Tour} from '../helper-files/tour-interface';
import { MessageService } from './message.service'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TourServiceService {
  
  private httpOptons ={
    headers : new HttpHeaders({'Content-type' : 'application/json' })
  };

  constructor(private msgService: MessageService, private http: HttpClient) {}
   
    getContent(): Observable<Tour[]>{
      this.msgService.add('Tour List provided');
      return this.http.get<Tour[]>("api/tour");

    }
    addContent(contentItem : Tour): Observable<Tour>{
      this.msgService.add('Item Added');
      return this.http.post<Tour>("api/tour",contentItem,this.httpOptons);
    }
    // getSingleItem(id: number): Observable<Tour>{
    //   this.msgService.add('Single Item at the top of list. ID is'+id) ;
    //   return this.http.get<Tour[id]>("api/tour",this.httpOptons);
    // }

    updateContent(contentItem : Tour): Observable<any>{
      this.msgService.add('Item Updated.') ;
      return this.http.put("api/tour", contentItem, this.httpOptons);
    }

   
}
