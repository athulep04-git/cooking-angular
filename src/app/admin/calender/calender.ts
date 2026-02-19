import { DatePipe } from '@angular/common';
import {ChangeDetectionStrategy, Component, model} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-calender',
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDatepickerModule,DatePipe],
  templateUrl: './calender.html',
  styleUrl: './calender.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Calender {
 selected = model<Date | null>(new Date());
}
