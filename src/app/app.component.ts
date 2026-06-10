import { Component } from '@angular/core';
import './training';
import { Colors } from '../enums/Color';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'румтибет';

  constructor() {
    this.methodSaveDate();
    this.saveVisitCount();
  }

  methodTakeColors(color: string): boolean {
    if (color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE) {
      return true;
    }
    return false;
  }

  methodSaveDate(): void {
    const date = new Date();
    localStorage.setItem('lastVisit', JSON.stringify(date));
  }

  saveVisitCount(): void {
    const visits = localStorage.getItem('visits');

    if (visits) {
      const count = Number(visits) + 1;
      localStorage.setItem('visits', JSON.stringify(count));
    } else {
      localStorage.setItem('visits', '1');
    }
  }
}
