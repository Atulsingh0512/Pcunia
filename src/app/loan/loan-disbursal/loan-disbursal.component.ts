import { Component, OnInit } from '@angular/core';
import { LoanData } from 'src/app/model/loan-data';
import { ProjectService } from 'src/app/project.service';
import { LoanReqService } from 'src/app/service/loan-req.service';

@Component({
  selector: 'app-loan-disbursal',
  templateUrl: './loan-disbursal.component.html',
  styleUrls: ['./loan-disbursal.component.css']
})
export class LoanDisbursalComponent implements OnInit{
  loanData1:LoanData|null=null;
  errorMsg:String='';
  loanArray: LoanData[] = [];
  constructor(private loanReq:LoanReqService,private projectService:ProjectService) {
  }
  ngOnInit()
  {
    this.projectService.getLoanData().subscribe(userLoanData=>{
      this.loanArray=userLoanData
      console.log(this.loanArray);
    },
    error => {
      this.errorMsg = error.error.message;
      //console.log("error is "+error);
      console.log("error msg is "+this.errorMsg);
      console.log("error msg is == "+error.error.message);
      console.log("error msg is... "+JSON.stringify(error.error));
    });
  }
}
