import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './container/contact-list/contact-list.component';
import { ContactImageDetailComponent } from './contact-image-detail/contact-image-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactImageDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
