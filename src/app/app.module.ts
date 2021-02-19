import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
// import { CompanyModule } from './company/company.module';
// import { PersonModule } from './person/person.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    // PersonModule,
    // CompanyModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("AppModule loaded !!");
  }
}
