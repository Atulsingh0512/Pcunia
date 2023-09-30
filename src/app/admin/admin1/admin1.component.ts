import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin1',
  templateUrl: './admin1.component.html',
  styleUrls: ['./admin1.component.css']
})
export class Admin1Component {


  constructor(private router:Router){
    
  }
  
  dashboard(){
    this.router.navigate(['/admin/admin1/dashboard'],{
      
    });
  }


}
