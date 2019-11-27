// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import {RouterModule} from '@angular/router';

// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { ReffComponent } from './reff/reff.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     ReffComponent
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot([
     
//     ])
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
      
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forRoot([

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }










