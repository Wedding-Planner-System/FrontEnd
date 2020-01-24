import { Component, OnInit } from '@angular/core';
import { Eventregister } from '../classes/eventregister';
import { EventregisterService } from '../services/eventregister.service';

@Component({
  selector: 'app-eventregister',
  templateUrl: './eventregister.component.html',
  styleUrls: ['./eventregister.component.css']
})
export class EventregisterComponent implements OnInit {

  constructor(public svc: EventregisterService) { }

  ngOnInit() {
  }

theEvent:any;

SubmitDetails(eventData){ 
    
  this.theEvent=eventData;
  this.svc.saveEventRegisterDetails(eventData).subscribe((res)=>{
     console.log("done");
   });
}  

}
