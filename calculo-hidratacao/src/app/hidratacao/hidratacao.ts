import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hidratacao',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './hidratacao.html'
})
export class HidratacaoComponent {
  form: FormGroup;
  litrosCalculados: number = 0;
  garrafasNecessarias: number = 0;
  calculoFeito: boolean = false;

  constructor(private fb: FormBuilder) {
    // Inicialização do formulário reativo
    this.form = this.fb.group({
      peso: ['', [Validators.required, Validators.min(10)]],
      atividade: ['sedentario', Validators.required]
    });
  }

  calcularMetas(): void {
    if (this.form.invalid) return;

    const { peso, atividade } = this.form.value;
    let multiplicador = 1.0;

    // Aplicação dos multiplicadores
    switch (atividade) {
      case 'moderado':
        multiplicador = 1.2;
        break;
      case 'intenso':
        multiplicador = 1.5;
        break;
      case 'sedentario':
      default:
        multiplicador = 1.0;
        break;
    }

    // lógica de negócio
    const necessidadeMl = peso / 35 * multiplicador;
    
    // Conversões e arredondamentos
    this.litrosCalculados = necessidadeMl / 1000;
    this.garrafasNecessarias = Math.ceil(necessidadeMl / 500);
    this.calculoFeito = true;
  }
}