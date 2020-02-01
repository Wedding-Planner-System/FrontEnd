import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { EventServiceService } from 'src/app/services/event-service.service';


@Component({
  selector: 'app-venue-listt',
  templateUrl: './venue-listt.component.html',
  styleUrls: ['./venue-listt.component.css']
})
export class VenueListtComponent implements OnInit {

  venueList:any=[];
 
  constructor(public router:Router,public svc:EventServiceService,private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.svc.getAllVenue().subscribe((res)=>
    {
      this.venueList=res;
    })
    
    
}



  


  NavigateToDate(id)
  {
    
    this.router.navigate(['/date',id]);
  }

}
