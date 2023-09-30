import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { ProjectService } from '../project.service';
import { LoginUser } from '../dto/login-user';
import { LoginServiceService } from '../service/login-service.service';
import { ResponseData } from '../dto/response-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @Input() username:string='';
  @Input() password: string = '';
  
  @Input() user1:User;
  submitted:boolean;
  private loginData!: LoginUser;
  loginErrorMessage='';

  constructor(private router: Router,private projectService: ProjectService,
    private loginService:LoginServiceService) {
    this.user1=new User();
    this.submitted=false
  }
  

  onLogin() {
    
     this.loginData = new LoginUser();
     console.log(this.user1.username);
     this.loginData.setUsername(this.user1.username);
     this.loginData.setPassword(this.user1.password);
     this.loginService.login(this.loginData).subscribe(response=>
     {
      localStorage.setItem("isLoggedItem","true");
      localStorage.setItem("username",this.loginData.getUserName());
      this.router.navigate(['/home']);
      }, (error: any) =>{
      console.log("An Error occurred ",error);
      this.loginErrorMessage=error.error.message;
      console.log(this.loginErrorMessage);
      });
    this.submitted=true;
    // console.log('Username:', this.user1);
  }
  ngOnInit(){
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
  }
}
