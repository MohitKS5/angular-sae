import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { MembersComponent } from './components/members/members.component';
import { AlumniComponent } from './components/alumni/alumni.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import {FooterComponent} from './components/footer/footer.component';
import { SponsorsLogosComponent } from './components/sponsors-logos/sponsors-logos.component';
import { TimelineComponent } from './components/about/timeline/timeline.component';
import {SheetsService} from './services/sheets.service';
import {HttpModule} from '@angular/http';
import { BrochureComponent } from './components/sponsors/brochure/brochure.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SponsorsComponent,
    MembersComponent,
    AlumniComponent,
    GalleryComponent,
    FooterComponent,
    SponsorsLogosComponent,
    TimelineComponent,
    BrochureComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    SheetsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
