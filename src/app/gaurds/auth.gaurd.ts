import { Injectable } from "@angular/core";
import { CanActivate,Router } from "@angular/router";
import { ClientService } from "../client.service";

@Injectable()
export class AuthGaurd implements CanActivate{
    constructor(private router:Router,private clientservice:ClientService){}
    canActivate() {
       let active= this.clientservice.navList1;
       if(active[0]){
           return true;
       }
       else{
        this.router.navigateByUrl('/');
        return false;
       }
    }
}