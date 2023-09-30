import { Component } from '@angular/core';

interface Transaction{
  date:Date;
  type:String;
  amount:number;
}
@Component({
  selector: 'app-transaction-management',
  templateUrl: './transaction-management.component.html',
  styleUrls: ['./transaction-management.component.css']
})
export class TransactionManagementComponent {
  transactionHistory: Transaction[] = [];



  generateTransactionHistory() {

    const startDate = (<HTMLInputElement>document.getElementById('startDate')).value;

    const endDate = (<HTMLInputElement>document.getElementById('endDate')).value;

    

    if (startDate && endDate) {

      // Simulate fetching transactions from a backend

      this.transactionHistory = [

        { date: new Date('2023-08-01'), type: 'Deposit', amount: 500 },

        { date: new Date('2023-08-02'), type: 'Withdrawal', amount: -200 },

        { date: new Date('2023-08-05'), type: 'Deposit', amount: 1000 },

        // Add more transactions here

      ];

    }

  }



  printTransactionHistory() {

    window.print();

  }
}
