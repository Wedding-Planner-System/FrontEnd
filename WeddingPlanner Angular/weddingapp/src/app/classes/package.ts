export class Package
{
    constructor(
        public packageId : string,
        public vendorId : string,
        public packageName: string,
        public price:string,
        public extra:string,
        public packageImage:string,
        public packageType:string  
        )
    {

    }

}