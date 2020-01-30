import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VenuedataService {

  theVenue:any;
  loggedin=false;
  baseUrl="http://localhost:7070/wed_planner/venue/"
  
  constructor(public http:HttpClient)
  {}
  
  /* Purpose: To save venue details
  * Author : Poonam K
  * Date : 25-Jan-19
  */
    saveVenuedetails(venueData,img)
    {
       const formData = new FormData();
       formData.append('venue', JSON.stringify(venueData));
       formData.append('image', img);
      return this.http.post(this.baseUrl, formData);
    }
    updateVenueDetails(venueData)
    {
    const formData=new FormData();
    formData.append('venue',venueData);
    return this.http.put(`${this.baseUrl}${venueData.venueId}`,venueData); 
    }
    //to call get all venue details api
  getAllVenue()
  {
    return this.http.get(this.baseUrl); 
  }

  // to call delete venue by id
  deleteVenueById(id)
  {
    return this.http.delete(this.baseUrl+id);
  }

  getVenueById(id)
  {
    return this.http.get(this.baseUrl+id);
  }
}