import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  total_revenue : number = 1600 ;
  shipping_fees : number = 2000;
  orders_number : number = 30;
  users_number : number = 100;
  data = [
    {
      name: 'Product 1',
      value: 10,
    },
    {
      name: 'Product 2',
      value: 20,
    },
    {
      name: 'Product 3',
      value: 15,
    },
    {
      name: 'Product 4',
      value: 15,
    },
    
    // Add more data points as needed
  ];
  data2 = [
    {
      name: 'Series 1',
      series: [
        {
          name: 'January ',
          value: 10,
        },
        {
          name: 'February ',
          value: 20,
        },
        {
          name: 'March ',
          value: 15,
        },
        {
          name: 'April ',
          value: 25,
        },
        {
          name: 'May ',
          value: 30,
        },
        {
          name: 'June ',
          value: 40,
        },
        {
          name: 'July ',
          value: 35,
        },
        {
          name: 'August ',
          value: 45,
        },
        {
          name: 'September ',
          value: 60,
        },
        {
          name: 'October ',
          value: 38,
        },
        {
          name: 'November ',
          value: 48,
        },
        {
          name: 'December ',
          value: 55,
        },
      ],
    },
    // Add more series as needed
  ];
  dat = [
    
    {
      name: 'Product 2',
      value: 45,
    },
    
    {
      name: 'Product 4',
      value: 25,
    },
    
    // Add more data points as needed
  ];
  dat1 = [
    
    {
      name: 'Product 2',
      value: 15,
    },
    
    {
      name: 'Product 1',
      value: 25,
    },
    {
      name: 'Product 3',
      value: 25,
    },
    {
      name: 'Product 4',
      value: 35,
    },
    
    // Add more data points as needed
  ];
}
