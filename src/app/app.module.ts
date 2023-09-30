import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';

import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';

import { UpdateComponent } from './accounts/update/update.component';

import { TransactionComponent } from './transaction/transaction.component';

import { LoanComponent } from './loan/loan.component';

import { PassbookComponent } from './passbook/passbook.component';

import { AccountsComponent } from './accounts/accounts.component';

import { CreateAccountComponent } from './accounts/create-account/create-account.component';

import { CreditSlipComponent } from './transaction/credit-slip/credit-slip.component';

import { CreditChequeComponent } from './transaction/credit-cheque/credit-cheque.component';

import { DebitSlipComponent } from './transaction/debit-slip/debit-slip.component';

import { DebitChequeComponent } from './transaction/debit-cheque/debit-cheque.component';

import { TransactionDetailsComponent } from './passbook/transaction-details/transaction-details.component';

import { AccountSummaryComponent } from './passbook/account-summary/account-summary.component';

import { LoanRequestComponent } from './loan/loan-request/loan-request.component';

import { LoanDisbursalComponent } from './loan/loan-disbursal/loan-disbursal.component';

import { AdminComponent } from './admin/admin.component';

// import { DeleteComponent } from './accounts/delete/delete.component';

import { Admin1Component } from './admin/admin1/admin1.component';

import { DashboardComponent } from './admin/admin1/dashboard/dashboard.component';

import { UsermanagementComponent } from './admin/admin1/dashboard/usermanagement/usermanagement.component';
//import { UserServiceService } from './service/user-service.service';
import { AccountManagementComponent } from './admin/admin1/dashboard/accountmanagement/accountmanagement.component';
import { TransactionManagementComponent } from './admin/admin1/dashboard/transaction-management/transaction-management.component';
import { LoanmanagementComponent } from './admin/admin1/dashboard/loanmanagement/loanmanagement.component';
import { HttpClientModule } from '@angular/common/http';
//import { ForgotComponent } from './forgotPassword/forgot/forgot.component';
//import { CreditModelComponent } from './model/credit-model/credit-model.component';

@NgModule({

 declarations: [

  AppComponent,

  LoginComponent,

  RegisterComponent,

  HomeComponent,

  UpdateComponent,

  TransactionComponent,

  LoanComponent,

  PassbookComponent,

  AccountsComponent,

  CreateAccountComponent,

  CreditSlipComponent,

  CreditChequeComponent,

  DebitSlipComponent,

  DebitChequeComponent,

  TransactionDetailsComponent,

  AccountSummaryComponent,

  LoanRequestComponent,

  LoanDisbursalComponent,

  AdminComponent,



  Admin1Component,

  DashboardComponent,

  UsermanagementComponent,
   AccountManagementComponent,
   TransactionManagementComponent,
   LoanmanagementComponent,
   //ForgotComponent,
   CreditSlipComponent,

 ],

 imports: [

  BrowserModule,

  AppRoutingModule,

  FormsModule,
  HttpClientModule

 ],

 providers: [
   //  UserServiceService
 ],

 bootstrap: [AppComponent]

})

export class AppModule { }











