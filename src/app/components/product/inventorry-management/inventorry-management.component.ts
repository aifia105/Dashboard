import { Component } from '@angular/core';

@Component({
  selector: 'app-inventorry-management',
  templateUrl: './inventorry-management.component.html',
  styleUrls: ['./inventorry-management.component.scss']
})
export class InventorryManagementComponent {

  item = {
    image: null
  }

  categorys = {
    name :"phone"
   
  }



  onFileSelected(event: any) {
    this.item.image = event.target.files[0];
  }
}

