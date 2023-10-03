import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {


  order = {
    codeOrder : "1",
    dateOrder : "12/6",
    total : "60",
    orderStatus : "en cours",
    client : "ahmed ahmed"

  }
  
}
