import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-insights',
  templateUrl: './customer-insights.component.html',
  styleUrls: ['./customer-insights.component.scss']
})
export class CustomerInsightsComponent {
  showList : boolean = false;

  toggleList() {
    this.showList = !this.showList;
  }

  client = {
    name :"ahmed ali",
    birthday : "1/6/1990",
    adresse : "bouselm",
    email :  "ahmed@gmail.com",
    phone : "phone"
  }

}
