import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
    baseUrl="http://localhost:7070/wed_planner/packages/";
    packageType:any;

  constructor(public http:HttpClient) { }

  getAllPackages(packageType)
  {
    let params = new HttpParams();
    params = params.append("type", packageType);
    return this.http.get(this.baseUrl,{params :params});
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
    
    const formData=new FormData();
  //   private Integer packageId;
	// private int vendorId;
	// private String packageName;
	// private double price;
	// @Lob
	// private byte[] packageImage;
	// private String packageType;//catering or decoration
	// private LocalDate createdDate;
	// private LocalDate lastModifiedDate;

    formData.append('packageId',packageData.packageId);
    formData.append('vendorId',packageData.vendorId);
    formData.append('packageName',packageData.packageName);
    formData.append('price',packageData.price);
    formData.append('image',image);
    formData.append('packageType',packageData.packageType);
    return this.http.post(this.baseUrl,formData);
  }

  updatePackageDetails(packageData)
  {
    alert(JSON.stringify(packageData))
    return this.http.put(this.baseUrl,packageData);
  }


}
