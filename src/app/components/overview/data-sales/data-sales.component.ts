import { Component } from '@angular/core';

@Component({
  selector: 'app-data-sales',
  templateUrl: './data-sales.component.html',
  styleUrls: ['./data-sales.component.scss']
})
export class DataSalesComponent {

  data: any[] = [
    {
      name: 'Series 1',
      value: 30,
    },
    {
      name: 'Series 2',
      value: 70,
    },
  ];
  view: [number, number] = [400, 300]; // Width and height
  showXAxis = true;
  showYAxis = true;

}
