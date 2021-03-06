import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfMembersComponent } from './list-of-members/list-of-members.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMemberModalComponent } from './add-member-modal/add-member-modal.component';
import {Overlay} from '@angular/cdk/overlay';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListOfMembersComponent,
    AddMemberModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [
    Overlay
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
