import { Component, OnInit } from '@angular/core';
import { UserAccount } from 'src/app/model/UserAccount';
import { ProjectService } from 'src/app/project.service';
//import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit{
  userAccount1:UserAccount|null=null;
  errorMsg:string=''
  constructor(private projectService:ProjectService) {
    this.userAccount1=new UserAccount();
  }
  ngOnInit()
  {
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
}
