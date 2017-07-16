import { Component } from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public title:string;
  public body:string;

  constructor() {
    this.title = 'Bienvenido!';
    this.body = 'Desde aqui podra gestionar las listas de los diferentes eventos del fin de semana.';
  }
}
