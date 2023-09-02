import { category } from "./category";

export interface product {
    id? : string;
    name : string;
    description : string;
    priceHt : Number;
    tva : Number;
    priceTTC : Number;
    pricture : string;
    category : category;
}