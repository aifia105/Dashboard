import { product } from "./product";

export interface mvt_stk {
    id? : string;
    dateMvt : Date;
    quantity : Number;
    product : product ;
    typeMvtStk : string;
    sourceMvtStk : string;
}