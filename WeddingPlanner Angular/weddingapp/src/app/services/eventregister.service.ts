import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventregisterService {

  baseUrl="http://localhost:8080/wed_planner/event"

  constructor(public http:HttpClient) { }

  saveEventRegisterDetails(registerEvent)
  {
    return this.http.post(this.baseUrl,registerEvent); 
  }

  getAllRegisteredEvents()
  {
    return this.http.get(this.baseUrl); 
  }


}
