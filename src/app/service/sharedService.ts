import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class TotalCounterService {
  private totalCounter: number = 0;

  incrementTotalCounter(){
    this.totalCounter += 1;
  };

  decrementTotalCounter(){
    this.totalCounter -= 1;
  };

  getTotalCounter(): number{
    return this.totalCounter;
  };

}
