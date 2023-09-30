import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserAccount } from 'src/app/model/UserAccount';
import { TransactionModel } from 'src/app/model/transaction-model';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-debit-slip',
  templateUrl: './debit-slip.component.html',
  styleUrls: ['./debit-slip.component.css']
})
export class DebitSlipComponent {
  @Input() transModel1:TransactionModel;
  submitted:boolean;
  formData = { name: '' };
  user1:User
  userAccount1:UserAccount

  constructor(private router: Router,private prgService:ProjectService) {
    this.user1=new User();
    this.submitted=false;
    this.transModel1=new TransactionModel();
    this.userAccount1=new UserAccount();
  }
  errorMsg:string="";
  message:string="";
  username:string=""
  ngOnInit() {
    const u=localStorage.getItem("username");;
    console.log(u);

    if(u)
    {
      this.transModel1.username=u;
    }
    const ua=localStorage.getItem("modelKey1");;
    console.log(u);

    if(ua)
    {
      this.userAccount1=JSON.parse(ua);
      console.log("chk",this.userAccount1.phone);
      this.transModel1.phone=this.userAccount1.phone
    }
  }
  debit()
  {
   //this.userAccount1.aadhaarImage=this.aadhaarImage
    console.log('chk'+JSON.stringify(this.transModel1));
    this.prgService.handleTrans(this.transModel1).subscribe(
      response=>
      {
        console.log(response);
        this.message=response
        this.router.navigate(['/transaction']);
      },
      error =>
      {
        console.log(error.error.message)
        console.log(error.message+"  .....")
        console.log("error msg is... "+JSON.stringify(error.error));
        
        this.errorMsg=error.error.message
      });
  }
}
