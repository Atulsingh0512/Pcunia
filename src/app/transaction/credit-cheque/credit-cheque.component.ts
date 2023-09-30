import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccount } from 'src/app/model/UserAccount';
import { CreditModel } from 'src/app/model/credit-model';
import { TransactionModel } from 'src/app/model/transaction-model';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-credit-cheque',
  templateUrl: './credit-cheque.component.html',
  styleUrls: ['./credit-cheque.component.css']
})
export class CreditChequeComponent {
  @Input() creditModel1:CreditModel;
  submitted:boolean;
  formData = { name: '' };
  userAccount1=new UserAccount;

  constructor(private router: Router,private prgService:ProjectService) {
    this.creditModel1=new CreditModel();
    this.submitted=false
  }
  errorMsg:string="";
  message:string="";
  username:string=""
  ngOnInit() {
    const u=localStorage.getItem("username");;
    console.log(u);

    if(u)
    {
      this.creditModel1.username=u;
    }
    const ua=localStorage.getItem("modelKey1");;
    console.log(u);

    if(ua)
    {
      this.userAccount1=JSON.parse(ua);
      this.creditModel1.phone=this.userAccount1.phone
    }
  }
  credit()
  {
   //this.userAccount1.aadhaarImage=this.aadhaarImage
    console.log('chk'+JSON.stringify(this.creditModel1));
    this.prgService.handleCredit(this.creditModel1).subscribe(
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
        
        this.errorMsg=JSON.stringify(error.error)
      }
      
    );
  }
}
