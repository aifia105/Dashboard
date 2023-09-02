import { adress } from "./adress";

export interface client {
    id? : string;
    name : string;
    lastName : string;
    birthday : Date;
    adress : adress;
    picture : string;
    email : string;
    password : string;
    phone : string;

}