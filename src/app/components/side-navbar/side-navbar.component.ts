import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent { 
   Dashboard : boolean = false  
    Product : boolean = false  
    Orders : boolean = false  
    Customer : boolean = false  
    Supplies : boolean = false  
    User_Management  : boolean = false  
    Reporting : boolean = false  
    constructor(private route: Router){

    }
  
 toggleExpanded(index : Number): void{
  switch(index){
    case 1:
      this.Dashboard = !this.Dashboard;
      break;
    case 2:
      this.Product = !this.Product;
      break;
    case 3:
      this.Orders = !this.Orders;
      break;
    case 4:
      this.Customer = !this.Customer;
      break;
    case 5:
      this.Supplies = !this.Supplies;
      break;
    case 6:
      this.User_Management = !this.User_Management;
      break;
    case 7:
      this.Reporting = !this.Reporting;
      break;
    default:
      break;
 
  }
 }
 account(){
  this.route.navigate(['/settings']);

 }
}
