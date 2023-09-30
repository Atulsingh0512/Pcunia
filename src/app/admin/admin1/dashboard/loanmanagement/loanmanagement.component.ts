import { Component } from '@angular/core';

interface Loan {

  loanId: string;

  accountHolder: string;

  loanType: string;

}

@Component({
  selector: 'app-loanmanagement',
  templateUrl: './loanmanagement.component.html',
  styleUrls: ['./loanmanagement.component.css']
})
export class LoanmanagementComponent {
  loanId: string = '';

  accountHolder: string = '';

  loanType: string = '';

  loanDetails: Loan[] = [];



  generateLoanData() {

    if (this.loanId && this.accountHolder && this.loanType) {

      // Simulate generating loan data

      this.loanDetails.push({

        loanId: this.loanId,

        accountHolder: this.accountHolder,

        loanType: this.loanType

      });
      // Clear input fields

      this.loanId = '';

      this.accountHolder = '';

      

this.loanType = '';

    }

  }
}
