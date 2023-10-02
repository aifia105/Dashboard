import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(private route : Router){}

  product = {
    name : "product4",
      description : "description4",
      priceHt : 4,
      tva : 4,
      priceTTC :4,
      pricture : "string4",
      category : "category4",
      avg_rating : 4,
      CreationDate :"12/4/2020"
  }

  createItemForm(){
    this.route.navigate(['product/inventorry-management']);

  }

}
