import { Component, OnInit } from '@angular/core';
@Component({

  selector: 'app-account-management',

  templateUrl: './accountmanagement.component.html',

  styleUrls: ['./accountmanagement.component.css']

})

export class AccountManagementComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {

  }

  activateAccount(): void {

    const accountNumber = (<HTMLInputElement>document.getElementById('activationAccountNumber')).value;

    if (accountNumber) {

      // Perform activation logic using the account number

      console.log(`Activating account number: ${accountNumber}`);

    }

  }



  suspendAccount(): void {

    const accountNumber = (<HTMLInputElement>document.getElementById('suspensionAccountNumber')).value;

    if (accountNumber) {

      // Perform suspension logic using the account number

      console.log(`Suspending account number: ${accountNumber}`);

    }

  }



  deactivateAccount(): void {

    const accountNumber = (<HTMLInputElement>document.getElementById('deactivationAccountNumber')).value;

    if (accountNumber) {

      // Perform deactivation logic using the account number

      console.log(`Deactivating account numbe

r: ${accountNumber}`);

    }

  }

}