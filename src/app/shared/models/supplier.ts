import { adress } from "./adress";

export interface supplier {
    id? : string;
    name : string;
    adress : adress;
    mail : string;
    phone : string;
}