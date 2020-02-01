import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CommonTypeService } from './common-type.service';

@Injectable({
  providedIn: 'root'
})
export class EventregisterService {

  baseUrl="http://localhost:7070/wed_planner/event";
  dt:any;
serviceId:any;

  constructor(public http:HttpClient,public svc:CommonTypeService) { }


  checkForExistEvent(selectedDate)
  {
    let params = new HttpParams();
    params = params.append("selectedDate", selectedDate);
    params = params.append("serviceType", this.svc.usertype);
    return this.http.get(this.baseUrl,{params :params});
  }
  saveEventRegisterDetails(registerEvent)
  {
    return this.http.post(this.baseUrl,registerEvent,{responseType:'text'}); 
  }

  getAllRegisteredEvents()
  {
    return this.http.get(this.baseUrl); 
  }


}
