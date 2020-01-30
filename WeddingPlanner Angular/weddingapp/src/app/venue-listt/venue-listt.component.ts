import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../services/event-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-venue-listt',
  templateUrl: './venue-listt.component.html',
  styleUrls: ['./venue-listt.component.css']
})
export class VenueListtComponent implements OnInit {

  venueList:any=[];
  myData:any;
  myFile:any;
  str:any;

  constructor(public router:Router,public svc:EventServiceService) { }

  ngOnInit() {
    this.svc.getAllVenue().subscribe((res)=>
    {
      this.venueList=res;
      this.str=JSON.stringify(res);
    })
    
    
}
 dataURItoBlob(data) {
  var binary = atob(data.split(',')[1]);
  var array = [];
for (var i = 0; i < binary.length; i++) {
   array.push(binary.charCodeAt(i));
}
return new Blob([new Uint8Array(array)], {
  type: 'image/jpg'
});
}


  NavigateToDate()
  {
    this.router.navigate(['date']);
  }

}
