import { Address } from './address';
import { Vendor } from './vendor';

export class Venue
{
    constructor(
        public venueId : string,
        public vendorId : string,
        public venueName: string,
        public address:Address,
        public capacity:string,
        public price:string,
        public extra:string,
        public venueImage:string,
        public imageName:string
        )
    {

    }

}
