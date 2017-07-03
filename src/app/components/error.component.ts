import { Component } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: '../views/error.component.html'
})
export class ErrorComponent {
  public title:string;

  constructor() {
    this.title = 'Error: Página no encontrada!';
  }
}
