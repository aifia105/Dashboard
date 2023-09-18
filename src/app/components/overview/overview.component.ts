import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
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
