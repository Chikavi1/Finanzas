import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { registerLocaleData } from '@angular/common';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxApexchartsModule } from 'ngx-apexcharts';
import { DatePipe } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');


@NgModule({
  declarations: [AppComponent],
  imports: [
    
    NgxApexchartsModule,
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    DatePipe, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
