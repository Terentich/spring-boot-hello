import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdButtonModule, MdIconModule, MdMenuModule, MdToolbarModule} from '@angular/material';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdMenuModule,
        MdToolbarModule,
        MdIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
