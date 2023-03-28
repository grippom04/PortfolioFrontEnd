import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SupHeaderComponent } from './components/sup-header/sup-header.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { LogButtonComponent } from './components/log-button/log-button.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ButtonComponent } from './components/button/button.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExperienceComponent } from './components/experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './components/education/education.component';
import { SkilsComponent } from './components/skils/skils.component';



@NgModule({
  declarations: [
    AppComponent,
    SupHeaderComponent,
    SocialLinksComponent,
    LogButtonComponent,
    BannerComponent,
    AboutComponent,
    ButtonComponent,
    ExperienceComponent,
    EducationComponent,
    SkilsComponent,


  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
