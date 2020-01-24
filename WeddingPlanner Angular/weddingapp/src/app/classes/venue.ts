import { Address } from './address';

export class Venue
{
 
    constructor(
        public venueId : string,
        public venueName: string,
        public address:Address,
        public capacity:string,
        public price:string,
        public extra:string,
        public venueImage:Blob
        
        )
    {

    }

}
