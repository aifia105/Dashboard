import { Component } from '@angular/core';

@Component({
  selector: 'app-product-performance',
  templateUrl: './product-performance.component.html',
  styleUrls: ['./product-performance.component.scss']
})
export class ProductPerformanceComponent {
  width: number = 700;
  height: number = 300;
  fitContainer: boolean = false;
  view: [number , number] = [600, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;
  doughnut = true;

  public single = [
    {
      "name": "product 1",
      "value": 2243772
    },
    {
      "name": "product 2",
      "value": 1126000
    },
    {
      "name": "product 3",
      "value": 296215
    },
    {
      "name": "product 4",
      "value": 257363
    },
    {
      "name": "product 5",
      "value": 196750
    },
    {
      "name": "product 6",
      "value": 204617
    }
  ];

}
