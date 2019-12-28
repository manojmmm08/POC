import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

//import {FORM_DIRECTIVES} from '@angular/forms';
@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css'],
})
export class CreateformComponent implements OnInit {
  
  constructor() { }
  username:string;
  email:string;
  password:string;

  submitForm(form: any): void{
    debugger;
    console.log("UserName: "+form.name+ " Email: "+form.email+" password:  "+form.password);
    console.log(form);
  }
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
  ngOnInit() {
    
  }
}
