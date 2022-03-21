import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:any;
email:any;
password:any;
  constructor(private clientservice:ClientService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(RegForm:any){
    console.log(RegForm.value)
    this.clientservice.authlist(RegForm.value);
    this.router.navigateByUrl('/');
  }

}
