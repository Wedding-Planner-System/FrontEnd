import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../services/event-service.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-venue-listt',
  templateUrl: './venue-listt.component.html',
  styleUrls: ['./venue-listt.component.css']
})
export class VenueListtComponent implements OnInit {

  venueList:any=[];
  myData:any;
  myFile:any;
  converted_image:SafeResourceUrl;

  constructor(public router:Router,public svc:EventServiceService,private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.svc.getAllVenue().subscribe((res)=>
    {
      
      this.venueList=res;
      if(this.venueList!=null)
      {
      for(var i=0;i<this.venueList.length;i++)
      {
        var data:string;
      //  alert(JSON.stringify(this.venueList[i]));
                  data=this.venueList[i].imageName;
      //  alert(data.toString);
        

        

        // console.log(data);
         this.myData=data;
        // alert(this.myData.base64);
       
        this.photo_url(data);
         alert(this.converted_image);
        // alert(this.myData)
        // this.converted_image= "data:image/jpeg;base64,"+data;
        // console.log(this.converted_image);
        
//this.dataURItoBlob(data);
        
      }
    }
    })
    
    
}


photo_url(data: string){
  this.converted_image = this.domSanitizer.bypassSecurityTrustResourceUrl(
    'data:image/jpg;base64,' + data);
}
getImgContent(mydata): SafeUrl {
  return this.domSanitizer.bypassSecurityTrustUrl(mydata);
}
 bin2String(array) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result += String.fromCharCode(parseInt(array[i], 2));
  }
  return result;
}
 dataURItoBlob(data) {
  var binary = atob(data.split(',')[1]);
  var array = [];
for (var i = 0; i < binary.length; i++) {
   array.push(binary.charCodeAt(i));
}

alert(array);
}


  NavigateToDate()
  {
    this.router.navigate(['date']);
  }

}
