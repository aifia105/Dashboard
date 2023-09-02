import { adress } from "./adress";

export interface user {
    id? : string;
    name : string;
    lastName : string;
    email : string;
    birthday : Date;
    password : string;
    adress : adress;
    picture : string;
}