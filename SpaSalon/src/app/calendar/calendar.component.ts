import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from './calendarEvent';
import { CalendarEventService } from './calendarEvent.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
    HOUR_MILISECOND : number = 86400000;

    calendarRows: Date[];
    selectedDate: Date;
    calendarEvents: CalendarEvent[];

    constructor(private calendarEventService: CalendarEventService) {
        
    }

  ngOnInit() {
      this.todayDate();

      this.calendarRows = Array(24).fill(3);
      for (let r = 0; r < this.calendarRows.length; r++) {
          this.calendarRows[r] = new Date(2000,1,1,1+r,0,0);
      }

      this.calendarEvents = this.calendarEventService.getCalendarEvents();

      //let eCalendarSteadyColumns = window.getComputedStyle(document.querySelector('.CalendarUnsteadyColumns'));
     // let width = window.innerWidth - document.querySelector('.CalendarBody').getBoundingClientRect().left - 10;
      //let height = window.innerHeight - document.querySelector('.CalendarBody').getBoundingClientRect().top;
      //console.log(document.querySelector('.CalendarBody').getBoundingClientRect().left, window.innerWidth, width);
      //document.querySelector('.CalendarUnsteadyColumns').setAttribute("style", "width:" + width.toString() + "px;" + "height:" + height.toString() + "px;");

  }

  prevDate() {
      this.selectedDate = new Date(this.selectedDate.getTime() - this.HOUR_MILISECOND);
  }
  nextDate() {
      this.selectedDate = new Date(this.selectedDate.getTime() + this.HOUR_MILISECOND);
  }
  todayDate() {
      this.selectedDate = new Date();
  }
    
  styleCalendarTable() {
      let eCalendarBody = document.querySelector('.CalendarBody');
      //document.querySelector('.CalendarSteadyBody').scrollTop = eCalendarBody.scrollTop;
      //document.querySelector('.CalendarHeader').scrollLeft = eCalendarBody.scrollLeft - 10;
  }

  styleCalendarContainer() {
       }

  styleCalendarEvent(obj: CalendarEvent) {
      let headerTimeStyle = window.getComputedStyle(document.querySelector('.headerTime'));
      let eventPerson1Style = window.getComputedStyle(document.querySelector('#eventPerson1'));
      let top = (obj.timeStart.getHours() + obj.timeStart.getMinutes() / 60) * 50;
      let height = (obj.duration / 60) * 50;
      let styles = {
          'top': top + 'px',
          'height': height + 'px',
          'left': headerTimeStyle.width,
          'width': eventPerson1Style.width,
          'background': obj.color
      };
      return styles;
  }

  scrollCalendarTable() {
      let eCalendarBody = document.querySelector('.CalendarBody');
      document.querySelector('.CalendarHeader').scrollLeft = eCalendarBody.scrollLeft;
      document.querySelector('.CalendarSteadyBody').scrollTop = eCalendarBody.scrollTop;
  }
}
