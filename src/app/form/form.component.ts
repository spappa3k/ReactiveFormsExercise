import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { rubricaModel, Indirizzo } from '../models/models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  constructor(private fb : FormBuilder){}

contattoNuovo?:rubricaModel

  myForm=this.fb.group({
    tipologia: new FormControl(true),
nome:new FormControl(''),
cognome:new FormControl(''),
ragioneSociale:new FormControl(''),
email:new FormControl(''),
telefono:new FormControl(''),
nascita:new FormControl(''),
indirizzoForm: this.fb.group({
  via: new FormControl(''),
  civico: new FormControl(''),
  provincia: new FormControl(''),
  cap: new FormControl(''),
  nazione: new FormControl('')
})
});

onSubmit(){
this.contattoNuovo=this.myForm.value as rubricaModel;
console.log(this.contattoNuovo);
  }
}




