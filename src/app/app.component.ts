import { Component } from '@angular/core';
import './training';
import './collection';
import { Colors } from '../enums/Color';
import { IProgram } from '../interfaces/IProgram';
import { IProgramPhoto } from '../interfaces/IProgramPhoto';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, DatePipe, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public companyName: string = 'румтибет';
  public selectedLocation: string = '';
  public dateInput: string = '';
  public selectedParticipant: string = '';
  public currentTime: Date = new Date();
  public counter: number = 0;
  public showTimer: boolean = true;
  public inputText: string = '';
  public isLoading: boolean = true;
  public intervalId!: number;
  public get isFormValid(): boolean {
    if (this.selectedLocation !== '' && this.dateInput !== '' && this.selectedParticipant !== '') {
      return true;
    }
    return false;
  }
  programs: IProgram[] = [
    {
      id: 1,
      image: '/images/section/program-people-icon.svg',
      title: 'Опытный гид',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 2,
      image: '/images/section/program-shield-icon.svg',
      title: 'Безопасный поход',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
    {
      id: 3,
      image: '/images/section/program-price-icon.svg',
      title: 'Лояльные цены',
      description:
        'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
    },
  ];

  photos: IProgramPhoto[] = [
    {
      id: 1,
      image: '/images/section/gallery/program-gallery-lake.jpg',
      alt: 'Озеро',
    },
    {
      id: 2,
      image: '/images/section/gallery/program-gallery-canyon.jpg',
      alt: 'Каньон',
    },
    {
      id: 3,
      image: '/images/section/gallery/program-gallery-snowmobile.jpg',
      alt: 'Снегоход',
    },
    {
      id: 4,
      image: '/images/section/gallery/program-gallery-valley.jpg',
      alt: 'Долина',
    },
  ];

  constructor() {
    this.methodSaveDate();
    this.saveVisitCount();
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentTime = new Date();
    }, 1000);

    setTimeout(() => {
      this.isLoading = !this.isLoading;
    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  public methodTakeColors(color: string): boolean {
    if (color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE) {
      return true;
    }
    return false;
  }

  public methodSaveDate(): void {
    const date = new Date();
    localStorage.setItem('lastVisit', JSON.stringify(date));
  }

  public saveVisitCount(): void {
    const visits = localStorage.getItem('visits');

    if (visits) {
      const count = Number(visits) + 1;
      localStorage.setItem('visits', JSON.stringify(count));
    } else {
      localStorage.setItem('visits', '1');
    }
  }

  public plus(): void {
    this.counter = this.counter + 1;
  }

  public minus(): void {
    if (this.counter > 0) {
      this.counter = this.counter - 1;
    }
  }

  public switchView() {
    this.showTimer = !this.showTimer;
  }
}
