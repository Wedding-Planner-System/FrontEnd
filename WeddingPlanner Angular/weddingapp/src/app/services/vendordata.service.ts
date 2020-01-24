import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendordataService {


  baseUrl="http://localhost:8080/wed_planner/vendor/";
  constructor(public http:HttpClient) { }


  saveVendorDetails(vendorData)
  {
    return this.http.post(this.baseUrl,vendorData); 
  }

  getAllVendors()
  {
    return this.http.get(this.baseUrl); 
  }

  deleteVendorById(id)
  {
    return this.http.delete(this.baseUrl+id);
  }
}
