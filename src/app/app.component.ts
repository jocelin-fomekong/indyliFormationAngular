import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  secondes: number;
  constructor() {
  }
  ngOnInit(): void {
    const  counter = interval(1000);
    counter.subscribe(
      (value: number) => {
        this.secondes = value;
      },
      (error: any) => {
        console.log('Une erreur a été rentcontrée');
      },
    () => {
        console.log('Observable complétée');
    }
    );
  }
}
