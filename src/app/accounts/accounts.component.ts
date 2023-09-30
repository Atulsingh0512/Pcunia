import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { UserAccount } from '../model/UserAccount';
//import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit{
  userAccount1:UserAccount;
  errorMsg: string='';
  
  constructor(private router: Router,private projectService:ProjectService) {
    this.userAccount1=new UserAccount();
  }
  ngOnInit()
  {
    //console.log(this.userService.getUserAccData());
    console.log(this.projectService.getAccDetail());
    this.projectService.getAccDetail().subscribe(userAccData=>{
      this.userAccount1=userAccData;
      console.log(this.userAccount1);
      
    },
    error => {
      
      this.errorMsg = error.error.message;
      //console.log("error is "+error);
      console.log("error msg is "+this.errorMsg);
      console.log("error msg is == "+error.error.message);
      console.log("error msg is... "+JSON.stringify(error.error));
    });
  }
  deleteAcc()
  {
    this.projectService.deleteAccDetail().subscribe(userAccData=>{
     
      console.log("deleted")
      window.alert('account deleted succesfully');
      this.router.navigate(['home']);
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
