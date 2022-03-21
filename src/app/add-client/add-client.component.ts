import { Component, OnInit } from '@angular/core';
import { client } from '../models/client';
import {NgForm} from '@angular/forms';
import { ClientService } from '../client.service';
import{ Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
id:any;
data:any;
header:any;
  Client:client={
    id:0,
    firstname:'',
    lastname:'',
    email:'',
    phone:0,
    balance:0
  };

  constructor(private clientservice:ClientService, private router:Router , private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    if(this.id!=0){
      this.data=this.clientservice.onGetDetails(this.id);
      this.Client=this.data;
      this.header="Edit";
      }
      else
      this.header="Add";
  }

  onSubmit(form:NgForm){
    let Client:client={
      id:form.value.id,
      firstname:form.value.firstname,
      lastname:form.value.lastname,
      email:form.value.email,
      phone:form.value.phone,
      balance:form.value.balance
    }
    console.log(form.value)
    if(this.id==0){
      this.clientservice.onAdd(Client);
      
    }
    else{
      this.clientservice.UpdateClient(Client);
      
    }
    this.router.navigateByUrl('/dashboard');
  }
  }
   



