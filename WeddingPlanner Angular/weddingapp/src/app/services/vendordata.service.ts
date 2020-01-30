import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendordataService {


  theVendor:any;
  baseUrl="http://localhost:7070/wed_planner/vendor/";
  constructor(public http:HttpClient) { }


  //to call save details api
  saveVendorDetails(vendorData)
  {
    return this.http.post(this.baseUrl,vendorData); 
  }

  updateVendorDetails(vendorData)
  {
    const formData=new FormData();
    formData.append('vendor',vendorData);
    return this.http.put(`${this.baseUrl}${vendorData.vendorId}`,vendorData); 
  }

  //to call get all vendor details api
  getAllVendors()
  {
    return this.http.get(this.baseUrl); 
  }

  // to call delete vendor by id
  deleteVendorById(id)
  {
    return this.http.delete(this.baseUrl+id);
  }

  //to call get vendor details by id 
  getVendorById(id)
  {
    return this.http.get(this.baseUrl+id);
  }
}
