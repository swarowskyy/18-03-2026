import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hidratacao',
  imports: [FormsModule,CommonModule],
  templateUrl: './hidratacao.html',
  styleUrl: './hidratacao.css',
})
export class Hidratacao {
   peso: number = 0;
  atividade: String = '';
  necessidade: number = 0;
  resultado: String = '';
  conclusao: number = 0;
  conclusao2: number = 0;
  resultado2: string= '';
  calcularHidratacao() {
    if(this.peso>0 && this.atividade>''){
    this.necessidade = this.peso /35;
    if (this.atividade == 'Sedentário' || 'sedentário' ) {
      this.conclusao = this.necessidade*1
      this.resultado = this.conclusao+ " ml de água.";
      this.conclusao2 = this.conclusao/500
      this.resultado2 = this.conclusao2+" garafas de água."
    } else if (this.atividade == 'Moderado' || 'moderado' ) {
      this.conclusao = this.necessidade*1.2
      this.resultado = this.conclusao+ " ml de água.";
      this.conclusao2 = this.conclusao/500
      this.resultado2 = this.conclusao2+" garafas de água."
    }
    } else if (this.atividade == 'Intenso' || 'intenso' ) {
      this.conclusao = this.necessidade*1.5
      this.resultado = this.conclusao+ " ml de água.";
      this.conclusao2 = this.conclusao/500
      this.resultado2 = this.conclusao2+" garafas de água."
    }  else {
      this.resultado = "informações nao validas.";
    }
  }
  }