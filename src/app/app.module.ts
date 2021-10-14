import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RichTextEditorAllModule } from '@syncfusion/ej2-ng-richtexteditor';
import {  AccordionAllModule } from '@syncfusion/ej2-ng-navigations';
import { DialogModule } from '@syncfusion/ej2-ng-popups';
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RichTextEditorAllModule,
    AccordionAllModule,
    DialogModule
    ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
