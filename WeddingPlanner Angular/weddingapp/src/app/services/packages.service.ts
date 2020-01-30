import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
    baseUrl="http://localhost:8080/wed_planner/cateringpackages";

  constructor(public http:HttpClient) { }

  getAllPackages()
  {
    return this.http.get(this.baseUrl);
  }
  
  deletePackageById(id)
  {
    return this.http.delete(this.baseUrl+id);
  }
  getPackageById(id)
  {
    return this.http.get(this.baseUrl+id);
  }
  savePackageDetails(packageData,image)
  {
    return this.http.post(this.baseUrl,packageData);
  }

  updatePackageDetails(packageData)
  {
    return this.http.put(this.baseUrl,packageData);
  }


}
