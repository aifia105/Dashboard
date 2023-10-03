import { Component } from '@angular/core';

@Component({
  selector: 'app-order-processing',
  templateUrl: './order-processing.component.html',
  styleUrls: ['./order-processing.component.scss']
})
export class OrderProcessingComponent {
  showList : boolean = false;
  order = {
    codeOrder : "1",
    dateOrder : "12/6",
    total : "60",
    orderStatus : "en cours",
    client : "ahmed ahmed"

  }
  toggleList() {
    this.showList = !this.showList;
  }

  closeModal(event: any) {
    const selectedValue = event.target.value;

    console.log('Selected Option:', selectedValue);
    if(selectedValue != null){
      this.showList = false;
    }
    

    
  }


}
