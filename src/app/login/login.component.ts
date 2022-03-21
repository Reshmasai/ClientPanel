import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:any;
  password:any;

  constructor(private clientservice:ClientService) { }

  ngOnInit(): void {
  }
  onSubmit(LoginForm:any){
    this.email=LoginForm.value.email;
    this.password=LoginForm.value.password;
    this.clientservice.check(this.email,this.password);
  }

}
