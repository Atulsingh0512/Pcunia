import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { LoanData } from '../model/loan-data';

@Injectable({
  providedIn: 'root'
})
export class LoanReqService {

  loanReqData:BehaviorSubject<LoanData | null> = new BehaviorSubject<LoanData | null>(null);

  setUserAccData(loanData1:LoanData)
  {
    this.loanReqData.next(loanData1);
  }
  getUserAccData()
  {
    return this.loanReqData.asObservable();
  }
}
