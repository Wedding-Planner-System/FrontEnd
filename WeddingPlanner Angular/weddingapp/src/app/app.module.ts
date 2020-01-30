import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule,HttpClient } from '@angular/common/http'
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HomeComponent } from './CommonPages/home/home.component';
import { AdminHeaderComponent } from './admin-module/admin-header/admin-header.component';
import { FooterComponent } from './CommonPages/footer/footer.component';
import { AdminModuleModule } from './admin-module/admin-module.module';
import { HeaderComponent } from './user-module/header/header.component';
import { VendorListComponent } from './admin-module/vendor-list/vendor-list.component';
import { VendorRegistrationComponent } from './admin-module/vendor-registration/vendor-registration.component';
import { VenueListtComponent } from './user-module/venue-listt/venue-listt.component';
import { EventregisterComponent } from './user-module/eventregister/eventregister.component';
import { DateComponent } from './user-module/date/date.component';
import { AboutUsComponent } from './CommonPages/about-us/about-us.component';
import { ContactUsComponent } from './CommonPages/contact-us/contact-us.component';
import { LoginComponent } from './admin-module/login/login.component';
import { AdminVenueListComponent } from './admin-module/admin-venue-list/admin-venue-list.component';
import { GallaryComponent } from './CommonPages/gallary/gallary.component';
import { UserModuleModule } from './user-module/user-module.module';
import { UserLoginService } from './services/user-login.service';
import { EventServiceService } from './services/event-service.service';
import { EventregisterService } from './services/eventregister.service';
import { VendordataService } from './services/vendordata.service';
import { AHomeComponent } from './admin-module/ahome/ahome.component';
import { VenueRegistrationComponent } from './admin-module/venue-registration/venue-registration.component';
import { PackagelistComponent } from './admin-module/packagelist/packagelist.component';
import { PackageComponent } from './admin-module/package/package.component';






 





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHeaderComponent,
    FooterComponent,
    HeaderComponent,
    VendorListComponent,
    VendorRegistrationComponent,
    VenueListtComponent,
    EventregisterComponent,
    DateComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    AdminVenueListComponent,
    GallaryComponent,
    AHomeComponent,
    VenueRegistrationComponent,
    PackagelistComponent,
    PackageComponent




    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AdminModuleModule,
    UserModuleModule,
    ReactiveFormsModule,
   MDBBootstrapModule.forRoot(),
    RouterModule.forRoot
    ([

      {
        path:'',
        component:HomeComponent,
       
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'admin',
        component:AHomeComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'about',
        component:AboutUsComponent
      },
      {
        path:'contact',
        component:ContactUsComponent
      },
      {
        path:'gallary',
        component:GallaryComponent
      },
      {
        path:'vendorlist',
        component:VendorListComponent
      },
      {
        path:'venuelist',
        component:AdminVenueListComponent
      },
      {
        path:'venueregister',
        component:VenueRegistrationComponent
      },
      {
        path:'vendorreg',
        component:VendorRegistrationComponent
      },
      {
          path:'editVendor/:id',
          component:VendorRegistrationComponent
      },
      {
        path:'editVenue/:id',
        component:VenueRegistrationComponent
    },
      {
        path:'venue',
        component:VenueListtComponent
     },
     {
       path:'date/:id',
       component:DateComponent
     },
     {
       path:'packages',
       component:PackagelistComponent
     },
     {
      path:'createPackage',
      component:PackageComponent
    },
    {
      path:'editPackage/:id',
      component:PackageComponent
  }
    ]

    )
  
  
   
  ],
  providers: [UserLoginService,EventServiceService,EventregisterService,VendordataService],
  bootstrap: [AppComponent]
})
export class AppModule { 


 
}
