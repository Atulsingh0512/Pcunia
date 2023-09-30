import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoanData } from 'src/app/model/loan-data';
import { ProjectService } from 'src/app/project.service';
import { LoanReqService } from 'src/app/service/loan-req.service';

@Component({
  selector: 'app-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.css']
})
export class LoanRequestComponent {
    fullName!: String;
    phone!: number;
    email!: string;
    residentialAddress!: String;
    loanType!: String;
    loanAmount!: number;
    loanPurpose!: String;
    occupation!: String;
    annualIncome!: Number;
    // incomeImage!:File;
    // residenceImage!: File;
    // panImage!:File;
    // signImage!:File;
    declaration!: String;

    @Input() loanData1:LoanData;
    submitted:boolean;
  
    constructor(private router: Router,private loanReq:LoanReqService,private projectService: ProjectService) {
      this.loanData1=new LoanData();
      this.submitted=false
    }
  
    reqLoan()
    {
      console.log('chk'+JSON.stringify(this.loanData1));
    this.projectService.loanBackend(this.loanData1).subscribe(
      response => console.log('Laon requested successful'),
      error => console.error('Loan creation failed:', error)
    );
      this.loanReq.setUserAccData(this.loanData1)
      console.log(this.loanReq.getUserAccData());
      this.router.navigate(['/loan/loandisbursal'],
      {
        queryParams:{
          loanData1:this.loanData1
        }
      });
    }
}
