import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../model/UserAccount';
import { ActivatedRoute } from '@angular/router';
// import { UserServiceService } from '../service/user-service.service';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.component.html',
  styleUrls: ['./passbook.component.css']
})
export class PassbookComponent implements OnInit{
  errorMsg:string=''

  userAccount1:UserAccount|null=null;
  
  constructor(private projectService:ProjectService) {
  }
  ngOnInit()
  {
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
}
