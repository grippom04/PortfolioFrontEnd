import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SupHeaderComponent } from './components/sup-header/sup-header.component';
import { APlogoComponent } from './components/aplogo/aplogo.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { LogButtonComponent } from './components/log-button/log-button.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    SupHeaderComponent,
    APlogoComponent,
    SocialLinksComponent,
    LogButtonComponent,
    BannerComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
