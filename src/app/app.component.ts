import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CalendarComponent} from "./calendar/calendar.component";
import {ValidationComponent} from "./validation/validation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarComponent, ValidationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calendar';

  meetings = {
    '2024-08-05': ['adadada', 'zzzzzz', 'fafafa'],
    '2024-08-06': ['qqqqqq', 'xxxxxxx', 'hhhhh']
  }
}
