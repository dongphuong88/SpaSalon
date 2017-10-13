import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { CalendarEvent } from './calendarEvent';
import { CalendarEventService } from './calendarEvent.service';

@Component({
  selector: 'app-calendarEvent',
  templateUrl: './calendarEvent.component.html',
  styleUrls: ['./calendarEvent.component.css']
})
export class CalendarEventComponent implements OnInit {

  event : CalendarEvent;
    startTime : string;

    constructor(
        private calendarEventService: CalendarEventService,
private route: ActivatedRoute,
        private location : Location
        ) {}

  ngOnInit() : void {
  //this.calendarEventService.getCalendarEvent(+params.get('id')));


  }

clickSubmit() {

this.event.timeStart = new Date( this.startTime);
console.log(this.event.timeStart);
this.calendarEventService.addCalendarEvent(this.event);
this.location.back();
  }
}
