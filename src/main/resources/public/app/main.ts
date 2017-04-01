// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {BrowserModule} from '@angular/platform-browser';
// import {NgModule} from '@angular/core';
// import {CommonModule} from '@angular/common';
// import {AppComponent} from './app.component';
// import {MaterialModule} from '@angular/material';
//
// @NgModule({
//
//     imports: [
//         BrowserModule,
//         CommonModule,
//         MaterialModule.forRoot(),
//     ],
//
//     declarations: [AppComponent],
//     bootstrap: [AppComponent],
//     providers: []
// })
// export class PlunkerAppModule {
// }
//
// platformBrowserDynamic().bootstrapModule(PlunkerAppModule);
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);