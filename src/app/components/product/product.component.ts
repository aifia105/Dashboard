import { Component } from '@angular/core';
import { product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  products : product[] = [
    { name : "product1",
      description : "description1",
      priceHt : 1,
      tva : 1,
      priceTTC : 1,
      pricture : "string1",
      category : "category1",
      avg_rating : 1,
      CreationDate : "12/4/2020"},

      { name : "product2",
      description : "description2",
      priceHt : 2,
      tva : 2,
      priceTTC : 2,
      pricture : "string2",
      category : "category2",
      avg_rating : 2,
      CreationDate:"12/4/2020"},

      { name : "product3",
      description : "description3",
      priceHt : 3,
      tva : 3,
      priceTTC : 3,
      pricture : "string3",
      category : "category3",
      avg_rating : 3,
      CreationDate: "12/4/2020"},


      { name : "product4",
      description : "description4",
      priceHt : 4,
      tva : 4,
      priceTTC :4,
      pricture : "string4",
      category : "category4",
      avg_rating : 4,
      CreationDate :"12/4/2020"},
  ]

}
