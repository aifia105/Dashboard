import { cart } from "./cart";
import { client } from "./client";
import { product} from "./product";


export interface orderClient {
    id? : string;
    codeOrder : string;
    dateOrder : Date;
    total : Number;
    orderStatus : string;
    client : client;
    cart ?: cart;
    product : product[];
    quantity : Number[]; 
    unit_price : Number[];
}