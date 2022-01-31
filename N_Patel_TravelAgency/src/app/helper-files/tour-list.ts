import{Tour} from 'src/app/helper-files/tour-interface';
export class TourList {
  
    static foodCount = 0;
    private _items: Tour[];
  
    constructor(item: Tour) {
      this._items = []; // initialize array
      this._items[0] = item;
      this.increaseCount();
    }
  
    get items(): Tour[] {
      return this._items;
    }
    set items(newItems: Tour[]) {
      this._items = newItems;
    }
  
    increaseCount() {
      return ++TourList.foodCount;
    }
  }