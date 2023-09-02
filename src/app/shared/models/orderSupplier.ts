import { product } from "./product";
import { supplier } from "./supplier";

export interface orderSupplier {
    id? : string;
    codeOrder : string;
    dateOrder : Date;
    orderStatus : string;
    supplier : supplier;
    product : product[];
    quantity : Number[]; 
    unit_price : Number[];
}
