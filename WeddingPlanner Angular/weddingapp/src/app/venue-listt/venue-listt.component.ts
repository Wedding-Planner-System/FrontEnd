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
  constructor(public router:Router,public svc:EventServiceService) { }

  ngOnInit() {
    this.svc.getAllVenue().subscribe((res)=>
    {
      this.venueList=res;
      
      for(var i=0;i<this.venueList.length;i++)
      {
        var data:string;
        data=this.venueList[i].venueImage;
        console.log(data);
        
  }

  
})
    
    
}

  NavigateToDate()
  {
    this.router.navigate(['date']);
  }

}
