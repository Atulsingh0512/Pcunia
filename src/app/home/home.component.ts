import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../project.service';
import { UserAccount } from '../model/UserAccount';
import { TransactionModel } from '../model/transaction-model';
import { CreditModel } from '../model/credit-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  user1: User;
  userAccount1:UserAccount
  username:any;
  errorMsg:string='';
  balance:Number=0;
  lastTrans:TransactionModel;
  lastCredit:CreditModel
  transactions: TransactionModel[] = [];
  credits: CreditModel[] = [];

  constructor(private route: Router,private http:HttpClient,private projectService:ProjectService) {
    this.user1=new User();
    this.userAccount1=new UserAccount();
    this.lastTrans=new TransactionModel();
    this.lastCredit=new CreditModel();
  }
  
  ngOnInit() {
    const uname=''
    // Retrieve the registered username from the query parameters
    // this.route.queryParams.subscribe(params => {
    //   this.registeredUsername = params['username'];
    //   this.registeredEmail=params['email'];
    //   console.log(params['user1']);
    //  // this.user1=params['user1'];
    //   // this.loginusername=params['username'];
    //   // console.log(registeredEmail);
    //   console.log(this.registeredUsername);
    //   console.log(this.user1);
    //   // You can access other parameters here if needed
      
    // });
    
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
    this.projectService.getAccDetail().subscribe(userAccData=>{
      this.userAccount1=userAccData;
      console.log(this.userAccount1);
      this.balance=this.userAccount1.balance;
      localStorage.setItem("modelKey1",JSON.stringify(this.userAccount1));
    
      
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
      this.lastTrans=this.transactions[this.transactions.length-1];
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
      console.log(this.transactions);
      this.lastCredit=this.credits[this.credits.length-1];
      //this.balance=this.userAccount1.balance;
      
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
