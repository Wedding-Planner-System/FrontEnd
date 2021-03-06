import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  baseUrl="http://localhost:7070/wed_planner/venue";

  constructor(public http:HttpClient) { }
  getAllVenue()
  {
  return this.http.get(this.baseUrl);
  }
  deleteVenueById(id)
  {
    return this.http.delete(this.baseUrl+id);
  }
}
