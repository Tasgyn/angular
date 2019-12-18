import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api/api.service';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  public form: FormGroup;

  public pessoas: any = [];

  public pessoa: any;


  constructor(public fb: FormBuilder, private crud: ApiService) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      id: ['',],
      endereco: ['', Validators.required]
    });
  }

  carregaPessoas() {
    this.crud.getAll()
      .subscribe(res => {
        this.pessoas = res;
      }, err => {
        console.log(err);
      });
  }

  ngOnInit() {
    this.carregaPessoas();
  }

  validaFormulario() {
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).markAsTouched();

    });
  }


  salvar() {
    this.validaFormulario();
    if (this.form.value.id) {
      this.alterar();
    } else {
      this.incluir();
    }

  }

  incluir() {

    this.crud.post(this.form.value)
      .subscribe(res => {
        this.form.reset();
        this.carregaPessoas();
      }, err => {
        console.log(err.message);
      });
  }

  alterar() {
    this.crud.put(this.form.value)
      .subscribe(res => {
        this.form.reset();
        this.carregaPessoas();
      }, err => {
        console.log(err.json());
      });
  }

  excluirPessoa(pessoa) {
    this.crud.delete(pessoa.id)
      .subscribe(res => {
        this.form.reset();
        this.carregaPessoas();
      }, err => {
        console.log(err);
      });

  }

  editarPessoa(pessoa) {
    this.crud.get(pessoa.id)
      .subscribe(res => {
        this.form.setValue(res);
        this.form.markAsDirty();
        this.carregaPessoas();
      }, err => {
        console.log(err);
      });
  }


}
