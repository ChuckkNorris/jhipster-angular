import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { Ng2BootstrapGridModule } from '../../../ng2-bootstrap-grid/src/ng2-bootstrap-grid.module';
import { BootstrapGridModule } from 'ng2-bootstrap-grid';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BootstrapGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
