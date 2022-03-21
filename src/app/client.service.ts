import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import{client} from './models/client';



@Injectable({
  providedIn: 'root'
})
export class ClientService {
lst:any[]=[{email:"abc@gmail.com",password:123456}];
right:boolean=false;
navList1:any[]=[];
navList2:any[]=[];
Clients:client[]=[
  {
    id:1,
    firstname:"Radhe",
    lastname:"Shyam",
    email:"RadheShyam@gmail.com",
    phone:7878987989,
    balance:57800
  },
  {
    id:2,
    firstname:"Radha",
    lastname:"Krishna",
    email:"RadhaKrishna@gmail.com",
    phone:9886567989,
    balance:47800
  },
  {
    id:3,
    firstname:"Satya",
    lastname:"Gopal",
    email:"SatyaGopal@gmail.com",
    phone:9378987689,
    balance:77900
  },
  {
    id:4,
    firstname:"Rukmini",
    lastname:"Madhav",
    email:"RukminiMadhav@gmail.com",
    phone:9877898798,
    balance:57800
  }
]

  constructor(private router:Router) { }
  authlist(data:any){
    this.lst.push(data);
    console.log(data);
  }
  check(val1:any,val2:any){
   let isTrue=this.lst.filter(x=>(x.email==val1) && (x.password==val2));
   console.log(isTrue)
    if(isTrue[0]){
      this.navList1.push(isTrue[0]);
      this.navList2.push('Logout');
     this.router.navigateByUrl('/dashboard');
  }
}

onGet(){
  return this.Clients;
}
onAdd(Client:client){
 this.Clients.push(Client);
 this.router.navigateByUrl('/dashboard');
 
}
onGetDetails(id:number){
  return this.Clients.find(x=>x.id==id);
}

UpdateClient(Client:client){
  const clientIndex=this.Clients.findIndex(x=>x.id==Client.id);
  if(clientIndex!=null && clientIndex!=undefined){
    this.Clients[clientIndex]=Client;
  }
  
}
onDelete(Client:client){
  
  if(Client!=undefined){
  let index=this.Clients.indexOf(Client,0);
  this.Clients.splice(index,1);}
  this.router.navigateByUrl('/dashboard');
}
getUser(){
  return this.navList1;
}

getVal(){
  return this.navList2;

}
empty(){
  this.navList1.splice(0,1);
  this.navList2.splice(0,1);
  console.log(this.navList1,this.navList2);
}
}
