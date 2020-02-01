import { Component, OnInit } from '@angular/core';
import { EventregisterService } from 'src/app/services/eventregister.service';
import { Eventregister } from 'src/app/classes/eventregister';
import { CommonTypeService } from 'src/app/services/common-type.service';


@Component({
  selector: 'app-eventregister',
  templateUrl: './eventregister.component.html',
  styleUrls: ['./eventregister.component.css']
})
export class EventregisterComponent implements OnInit {

  constructor(public svc: EventregisterService,public svc1:CommonTypeService) { }

  ngOnInit() {
  }

theEvent:Eventregister;


SubmitDetails(eventData){ 
    
  this.theEvent=eventData;
  alert(this.svc.dt);
  alert(this.svc.serviceId)
  this.theEvent.serviceType=this.svc1.usertype;
  this.theEvent.createdDate=this.svc.dt;
  this.theEvent.serviceType=this.svc.serviceId;
  this.svc.saveEventRegisterDetails(eventData).subscribe((res)=>{
     alert("Event Registered Successfully")
   });
}  

}
