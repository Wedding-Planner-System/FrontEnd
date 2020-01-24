import { Component, OnInit } from '@angular/core';
import {Venue } from '../classes/venue';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-venue-registration',
  templateUrl: './venue-registration.component.html',
  styleUrls: ['./venue-registration.component.css']
})
export class VenueRegistrationComponent implements OnInit {


  

  constructor(public svc :UserLoginService) { }

  theVenue:any;
  img:any;
  str:any;

  ngOnInit() 
  {
  }

  onSelectFile(event) 
  {
    this.img = event.target.files[0];
    var reader=new FileReader();
    reader.onload =this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.img);
   
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
           this.str= btoa(binaryString);
           console.log(btoa(binaryString));
   }
  

  SubmitDetails(venueData){ 
    
    this.theVenue=venueData;
    this.theVenue.venueImage=this.str;
    alert(this.theVenue.venueImage);
     this.svc.saveVenuedetails(venueData,this.img).subscribe((res)=>{
       console.log("done");
     });
  }  

}
