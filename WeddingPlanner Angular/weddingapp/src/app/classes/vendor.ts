import { Address } from './address';

export class Vendor 
{
    
    constructor(
        public vendorId:string,
        public firstName : string,
        public lastName : string,
        public email : string,
        public contactNo : number,
        public address:Address,
        public serviceType:string
    )
    {
    }
}
