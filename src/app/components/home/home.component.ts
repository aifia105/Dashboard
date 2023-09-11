import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedItem: string = "";

  handleSelectedItem(item: string){
    this.selectedItem = item;
  }

}
