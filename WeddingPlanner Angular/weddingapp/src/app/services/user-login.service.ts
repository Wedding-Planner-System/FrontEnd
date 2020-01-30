import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService 
{

  loggedin=false;
baseUrl="http://localhost:7070/wed_planner/user";



  constructor(public http:HttpClient) { }


  validateUser(username:string,password:string)
  {
    const formData=new FormData();
    formData.append("username",username);
    formData.append("password",password);
    return this.http.post(this.baseUrl,formData,{responseType:'text'});
  }

  
}
