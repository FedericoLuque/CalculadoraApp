import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operandos',
  templateUrl: './operandos.component.html',
  styleUrl: './operandos.component.css',
})
export class OperandosComponent {
  

  operandoA: number = NaN;

  operandoB: number = NaN;

  resultado: number = 0;

  @Output() resultadoCreado = new EventEmitter<number>();

  suma(): void {
    this.resultado = this.operandoA + this.operandoB;

    this.resultadoCreado.emit(this.resultado);
  }

  resta(): void {
    this.resultado = this.operandoA - this.operandoB;

    this.resultadoCreado.emit(this.resultado);
  }

  multiplica(): void {
    this.resultado = this.operandoA * this.operandoB;

    this.resultadoCreado.emit(this.resultado);
  }

  divide(): void {
    this.resultado = this.operandoA / this.operandoB;

    this.resultadoCreado.emit(this.resultado);
  }
}
