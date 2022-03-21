import { Component, OnInit } from '@angular/core';
import {client} from '../models/client';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clients:client[]=[];
  totalOwed:any;
  
  

  constructor(private clientservice:ClientService) { }

  ngOnInit(): void {

    this.clients=this.clientservice.onGet();
    this.GetTotalOwed();
  }

  GetTotalOwed(){
    this.totalOwed=this.clients.reduce((total,client)=>{
      return total+client.balance;
    },0);
  }
  
  }
  
  



