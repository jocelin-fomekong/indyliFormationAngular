import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'indyliFormationAngular';
  isAuth = false;
  lastUpdate = new Promise(
    (resolve) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 4000
      );
    }
  );
  appreils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    } ,
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'allumé'
    }
  ];
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      },4000
    );
  }
  onAllumer(){
    console.log('On allume tout');
  }
}
