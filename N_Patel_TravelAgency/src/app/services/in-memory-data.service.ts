import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TourList } from '../helper-files/contentDb';
import { Tour } from '../helper-files/tour-interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb(){
    const tour : Tour[] = TourList;
    return {tour}; 
  }
  genId(content : Tour[]): number{
    return content.length > 0 ?
    Math.max(...content.map(c=>c.id ?? 0)) + 1 : 2000;
  }
}
