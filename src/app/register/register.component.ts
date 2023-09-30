import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { ProjectService } from '../project.service';
//import { RegUserService } from '../service/reg-user.service';
import { Registration } from '../dto/registration';
import { RegServiceService } from '../service/reg-service.service';
import { ResponseData } from '../dto/response-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() username: string = '';
  @Input() password: string = '';
  @Input() email: String = '';
  @Input() name: String = '';
  @Input() confirmPassword: String = ''

  @Input() user1: User;
  submitted: boolean;
  private registrationData: Registration = new Registration;

  constructor(private router: Router, private projectService: ProjectService,
    private regService: RegServiceService) {
    this.user1 = new User();
    this.submitted = false;
  }

  onSubmit() {
    console.log('on submit called....' + JSON.stringify(this.user1));
    this.registrationData = new Registration();
    this.registrationData.setName(this.user1.name);
    this.registrationData.setEmail(this.user1.email);
    this.registrationData.setUsername(this.user1.username);
    this.registrationData.setPassword(this.user1.password);
    this.registrationData.setConfirmPassword(this.user1.confirmPassword);
    this.submitted = true;
    this.regService.register(this.registrationData).subscribe
      ((data: ResponseData) => {
        console.log("Response Data" + JSON.stringify(data));
      }), (error: string) => {
        console.log("An Error Ocurred " + error);
      };

    console.log('Username:', this.user1);
    this.router.navigate(['/login']);
  }
}
