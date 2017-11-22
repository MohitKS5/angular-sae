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
import { SubFilterPipe } from './components/members/sub-filter.pipe';
import {FlexLayoutModule} from '@angular/flex-layout';
import { NavComponent } from './components/nav/nav.component';
import { MobNavComponent } from './components/mob-nav/mob-nav.component';
import {AppRoutingModule} from './app.route';
import {LazyLoadImageModule} from 'ng2-lazyload-image';
import { HomeComponent } from './components/home/home.component';

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
    SubFilterPipe,
    NavComponent,
    MobNavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FlexLayoutModule,
    AppRoutingModule,
    LazyLoadImageModule,
  ],
  providers: [
    SheetsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
