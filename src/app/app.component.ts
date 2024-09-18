import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aplicación de calculadora';

  operandoA : number = NaN;

  operandoB : number = NaN;

  resultado : number = 0;


  suma():void{

    this.resultado = this.operandoA + this.operandoB;

  }

  resta():void{

    this.resultado = this.operandoA - this.operandoB;

  }

  multiplica():void{
  
    this.resultado = this.operandoA * this.operandoB

  }

  divide():void{

  this.resultado = this.operandoA / this.operandoB;

  }

}
