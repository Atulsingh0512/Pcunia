import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccount } from 'src/app/model/UserAccount';
import { ProjectService } from 'src/app/project.service';
import { ImageService } from 'src/app/service/image-service.service';
//import { RegUserService } from 'src/app/service/reg-user.service';
//import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit{
  name: string='';
  dob: string='';
  accType:string='';
  address: string='';
  email: string='';
  phone: number=0;
  fatherName: string='';
  motherName: string='';
  panCard: Number=0;
  aadhaarCard: Number=0;
  nominee: string='';
  nomineeRelation: string='';
  occupation:string='';
  annualIncome: number=0;
  // aadhaarImage: File|null=null;
  // residenceImage: File|null=null;
  // panImage:File|null=null;
  // profile:File|null=null;

  @Input() userAccount1:UserAccount;
  submitted:boolean;
  formData = { name: '' };

  constructor(private router: Router,
    private projectService: ProjectService,private imageService: ImageService) {
    this.userAccount1=new UserAccount();
    this.userAccount1.balance=1000;
    this.submitted=false
  }

  // onFileSelected(event:any,fieldName:String)
  // {
  //   switch(fieldName){
  //     case 'aadhaarImage':
  //       console.log("aaadhar added");
  //       this.userAccount1.aadhaarImage=event.target.files.item(0);
  //       break;
  //     case 'residenceImage':
  //       this.userAccount1.residenceImage=event.target.files.item(0);
  //       break;
  //     case 'panImage':
  //       this.userAccount1.panImage=event.target.files.item(0);
  //       break;
  //     case 'profile':
  //       this.userAccount1.profile=event.target.files.item(0);
  //       break;
      

  //   }
  // }
  errorMsg:string="";
  username:string=""
  ngOnInit() {
    const umodel=localStorage.getItem("userModel");
    console.log(umodel);

    if(umodel)
    {
      this.userAccount1.name=JSON.parse(umodel).name;
      this.userAccount1.email=JSON.parse(umodel).email;
    }
  }
  createAcc()
  {
   //this.userAccount1.aadhaarImage=this.aadhaarImage

    console.log('chk'+JSON.stringify(this.userAccount1));
    this.projectService.createAccount(this.userAccount1).subscribe(userAccData=>
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
