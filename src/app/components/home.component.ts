import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: '../views/home.component.html'
})
export class HomeComponent {
  public title:string;
  public body:string;

  constructor() {
    this.title = 'Bienvenido!';
    this.body = 'Desde aqui podra gestionar las listas de los diferentes eventos del fin de semana';
  }
}
