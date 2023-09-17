import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent { 
   Dashboard : boolean = false  ;
    Product : boolean = false  ;
    Orders : boolean = false  ;
    Customer : boolean = false  ;
    Supplies : boolean = false  ;
    User_Management  : boolean = false  ;
    Reporting : boolean = false  ;
    isExpanded_D : boolean = false;
    isExpanded_P: boolean = false;
    isExpanded_O : boolean = false;
    isExpanded_C: boolean = false;
    isExpanded_S: boolean = false;
    isExpanded_U: boolean = false;
    isExpanded_R: boolean = false;

    isOpen : boolean = true;
    isExpanded : boolean = false;

    constructor(private route: Router){

    }
  
 toggleExpanded(index : Number): void{
  switch(index){
    case 1:
      this.Dashboard = !this.Dashboard;
      this.isExpanded_D = !this.isExpanded_D;
      break;
    case 2:
      this.Product = !this.Product;
      this.isExpanded_P = !this.isExpanded_P;
      break;
    case 3:
      this.Orders = !this.Orders;
      this.isExpanded_O = !this.isExpanded_O;
      break;
    case 4:
      this.Customer = !this.Customer;
      this.isExpanded_C = !this.isExpanded_C;
      break;
    case 5:
      this.Supplies = !this.Supplies;
      this.isExpanded_S = !this.isExpanded_S;
      break;
    case 6:
      this.User_Management = !this.User_Management;
      this.isExpanded_U = !this.isExpanded_U;
      break;
    case 7:
      this.Reporting = !this.Reporting;
      this.isExpanded_R = !this.isExpanded_R;
      break;
    default:
      break;
 
  }
 }
 
 account(){
  this.route.navigate(['/settings']);

 }
 @Output() itemSelected = new EventEmitter<string>;
 selectItem(item : string){
  this.itemSelected.emit(item);
 }

 closeSideBar(){
  this.isOpen = !this.isOpen;
  this.isExpanded = !this.isExpanded;
 }

 logout(){
  this.route.navigate(['authentication']);

}
}
