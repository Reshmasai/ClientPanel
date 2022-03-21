import { Component, OnInit } from '@angular/core';
import { client } from '../models/client';
import { ClientService } from '../client.service';
import{ Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Client:any;
  id:any;
  hasBalance:boolean=false;
  ShowBalance:boolean=false;
  constructor(private clientservice:ClientService, private router:Router , private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
   this.Client= this.clientservice.onGetDetails(this.id);
  }
  UpdateBalance(){
   this.clientservice.UpdateClient(this.Client);
   this.ShowBalance=!this.ShowBalance;
  }
  onDelete(){
    this.clientservice.onDelete(this.Client);
    }

}
