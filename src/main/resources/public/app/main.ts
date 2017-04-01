import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

import {AppComponent} from './app.component';

// import {enableProdMode} from '@angular/core';

@NgModule({

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        MaterialModule,
    ],

    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);