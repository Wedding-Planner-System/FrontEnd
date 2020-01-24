import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactUs } from '../classes/contact-us';
@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  theContact:any;
  baseUrl="http://localhost:8080/wed_planner/contactus";

  constructor(public http:HttpClient) { }

  saveContactUs(Name:string,Email:string,Message:string)
  {
    
    this.theContact =new ContactUs(Name,Email,Message);
    
    
    return this.http.post(this.baseUrl,this.theContact,{responseType:'text'});
  }
}
