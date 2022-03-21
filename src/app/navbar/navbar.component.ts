import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user:any[]=[];
display:any[]=[];
appear:any;
  constructor(private clientservice:ClientService) { }

  ngOnInit(): void {
   this.user=this.clientservice.getUser();
   this.display=this.clientservice.getVal();
   
  }
  fn(){
    console.log("hi")
    this.clientservice.empty();
  }

}
