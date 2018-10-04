import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireModule,} from 'angularfire2'
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,MatToolbarModule } from '@angular/material';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import{FormsModule} from '@angular/forms';  
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyService } from './company/company.service';
const fireAppconfig = {
    apiKey: "AIzaSyBDPv2-ic-wr1UkvlOoDochRxEJgH-ai1s",
    authDomain: "angularfire-d8151.firebaseapp.com",
    databaseURL: "https://angularfire-d8151.firebaseio.com",
    projectId: "angularfire-d8151",
    storageBucket: "angularfire-d8151.appspot.com",
    messagingSenderId: "221887724189"
  };

@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    FlexLayoutModule,
    AngularFireModule.initializeApp(fireAppconfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,  
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers:  [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
