import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Aplicación de calculadora';
  resultado : number = 0;

  recibirResultado(numero: number) {
    this.resultado = numero;
  }
}
