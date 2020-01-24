import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService 
{

  loggedin=false;
baseUrl="http://localhost:8080/wed_planner/user";
testUrl="http://localhost:8080/wed_planner/venue"


  constructor(public http:HttpClient) { }


  validateUser(username:string,password:string)
  {
    const formData=new FormData();
    formData.append("username",username);
    formData.append("password",password);
    return this.http.post(this.baseUrl,formData,{responseType:'text'});
  }

  saveVenuedetails(venueData,img)
  {
    

   
    // const test1=JSON.stringify(venueData);
    // alert(test1);
    // const formData = new FormData();
    // formData.append('venue', venueData);
    // formData.append('image', img);
    return this.http.post(this.testUrl, venueData);
    

  }
}
