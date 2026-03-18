import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hidratacao',
  imports: [FormsModule, CommonModule],
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
  Math = Math;
  calcularHidratacao() {
  // Criamos uma variável auxiliar para facilitar a leitura
  const atividadeMinuscula = this.atividade.toLowerCase();

  if (this.peso > 0 && this.atividade > '') {
    this.necessidade = this.peso / 35;

    // Agora comparas apenas com a versão minúscula
    if (atividadeMinuscula === 'sedentario' || atividadeMinuscula === 'sedentário') {
      this.conclusao = (this.necessidade * 1) * 1000;
    } 
    else if (atividadeMinuscula === 'moderado') {
      this.conclusao = (this.necessidade * 1.2) * 1000;
    }
    else if (atividadeMinuscula === 'intenso') {
      this.conclusao = (this.necessidade * 1.5) * 1000;
    }

    this.conclusao2 = this.conclusao / 500;
  }
}
}