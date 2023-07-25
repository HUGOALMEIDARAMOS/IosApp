import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {

 form!: FormGroup
 objetosSalvosSession: any[] = [];
 platform: any;
 ValorTotal:number = 0;



  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      qtd: [null],
      valor: [null]
    })
  }


  ngOnInit(): void {
  }

  onSubmit(){

    const objeto = { quantidade: this.form.value.qtd, valor: this.form.value.valor };
    const objetosSalvosStr = sessionStorage.getItem('objetosSalvos');
    let objetosSalvos: any[] = objetosSalvosStr ? JSON.parse(objetosSalvosStr) : [];
    objetosSalvos.push(objeto);
    sessionStorage.setItem('objetosSalvos', JSON.stringify(objetosSalvos));
    console.log('chegou final submit')
    this.carregarDados();
  }

  calcularTotal() {
    const objetosSalvosStr = sessionStorage.getItem('objetosSalvos');
    if (objetosSalvosStr) {
      const objetosSalvos: any[] = JSON.parse(objetosSalvosStr);
      let total = 0;
      for (const objeto of objetosSalvos) {
        total += objeto.quantidade * objeto.valor;
      }
      return  total;
    }
    return 0;
  }

  carregarDados() {
    console.log('valor total é ',)
    console.log('entrou no carregamento')
    const objetosSalvosStr = sessionStorage.getItem('objetosSalvos');
    console.log('verificou se objetosSalvosStr exist')
    if (objetosSalvosStr) {
      console.log('entrou dentro do if')
      this.objetosSalvosSession = JSON.parse(objetosSalvosStr);
      console.log('preencheu a variavel', this.objetosSalvosSession)
    }
    console.log('Saiu do if')
  }



}
