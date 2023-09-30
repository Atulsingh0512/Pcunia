import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserAccount } from 'src/app/model/UserAccount';
import { CreditModel } from 'src/app/model/credit-model';
import { TransactionModel } from 'src/app/model/transaction-model';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit{
  user1: User;
  userAccount1:UserAccount
  transModel1:TransactionModel
  errorMsg:string='';
  balance:Number=0;
  username:any;
  transactions: TransactionModel[] = [];
  credits: CreditModel[] = [];

  constructor(private route: Router,private http:HttpClient,private projectService:ProjectService) {
    this.user1=new User();
    this.userAccount1=new UserAccount();
    this.transModel1=new TransactionModel();
  }
  
  ngOnInit() {
    const uname=''
    
    this.username=localStorage.getItem("username");
    console.log(this.username);
    this.projectService.getUser().subscribe(userData=>{
      this.user1=userData;
      console.log(this.user1);
      localStorage.setItem("userModel",JSON.stringify(userData));
      console.log(localStorage.getItem("userModel"));
    },
    error => {
      
      this.errorMsg = error.error.message;
      //console.log("error is "+error);
      console.log("error msg is "+this.errorMsg);
      console.log("error msg is == "+error.error.message);
      console.log("error msg is... "+JSON.stringify(error.error));
    });
    this.projectService.getTrans().subscribe(userAccData=>{
      this.transactions=userAccData;
      console.log(this.transactions);
      this.balance=this.userAccount1.balance;
    },
    error => {
      this.errorMsg = error.error.message;
      //console.log("error is "+error);
      console.log("error msg is "+this.errorMsg);
      console.log("error msg is == "+error.error.message);
      console.log("error msg is... "+JSON.stringify(error.error));
    });
    this.projectService.getCredit().subscribe(userAccData=>{
      this.credits=userAccData;
      console.log(this.userAccount1);
      this.balance=this.userAccount1.balance;
    },
    error => {
      this.errorMsg = error.error.message;
      //console.log("error is "+error);
      console.log("error msg is "+this.errorMsg);
      console.log("error msg is == "+error.error.message);
      console.log("error msg is... "+JSON.stringify(error.error));
    });
    this.projectService.getAccDetail().subscribe(userAccData=>{
      this.userAccount1=userAccData;
      console.log(this.userAccount1);
      this.balance=this.userAccount1.balance;
      
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
