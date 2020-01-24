export class Venue
{
 
    constructor(
        public vendorId : string,
        public venueName: string,
        public area:string,
        public street:string,
        public city:string,
        public state:string,
        public pinCode:string,
        public capacity:string,
        public price:string,
        public extra:string,
        public venueImage:Blob
        
        )
    {

    }

}
