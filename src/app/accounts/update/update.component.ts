import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAccount } from 'src/app/model/UserAccount';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  @Input() userAccount1:UserAccount;
  
  constructor(private router: Router,
    private projectService: ProjectService) {
    this.userAccount1=new UserAccount();
    
  }
  errorMsg:string="";
  username:string=""
  ngOnInit() {
    const umodel=localStorage.getItem("userModel");
    console.log(umodel);

    if(umodel)
    {
      this.userAccount1.name=JSON.parse(umodel).name;
      this.userAccount1.phone=JSON.parse(umodel).phone;
      this.userAccount1.address=JSON.parse(umodel).address;
    }
  }
  updateData() {
    console.log('chk'+JSON.stringify(this.userAccount1));
    this.projectService.updateAccount(this.userAccount1).subscribe(userAccData=>
      {
        this.userAccount1=userAccData;
        console.log(this.userAccount1);
        this.router.navigate(['/accounts']);
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
