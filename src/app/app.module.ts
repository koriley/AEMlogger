import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { PathComponent } from './path/path.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonitorComponent } from './monitoring/monitor/monitor.component';

@NgModule({
  declarations: [
    AppComponent,
    PathComponent,
    MonitorComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
