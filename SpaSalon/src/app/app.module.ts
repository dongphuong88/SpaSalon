import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { CalendarEventService } from './calendar/calendarEvent.service';

import { AppRoutingModule } from './app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarEventComponent } from './calendar/calendarEvent.component';

@NgModule({
  declarations: [
      AppComponent,
      DashboardComponent,
      HeroDetailComponent,
      HeroesComponent,
      CalendarComponent,
      CalendarEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      AppRoutingModule
  ],
  providers: [HeroService, CalendarEventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
