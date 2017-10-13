import { CalendarEvent } from './calendarEvent';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CalendarEventService {
    calendarEvents: CalendarEvent[];

    constructor() {
        this.calendarEvents = Array(1);
        for (let r = 0; r < this.calendarEvents.length; r++) {
            this.calendarEvents[r] = new CalendarEvent();
            this.calendarEvents[r].id = r;
            this.calendarEvents[r].timeStart = new Date("2017-8-1 "+(r+2)+":30");
            this.calendarEvents[r].duration = 60;
            this.calendarEvents[r].title = "test12321";
            this.calendarEvents[r].color = "red";
        }
    }

    getCalendarEvents(): CalendarEvent[] {
        return this.calendarEvents;
    }

    getCalendarEvent(id: number): CalendarEvent {
if( id == 0) {
    let event = new CalendarEvent();
return event;
}
        return this.calendarEvents[0];
    }

addCalendarEvent( event : CalendarEvent) {
  this.calendarEvents.push(event);
}

}
