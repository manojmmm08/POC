import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-using-model-validation',
  templateUrl: './form-using-model-validation.component.html',
  styleUrls: ['./form-using-model-validation.component.css']
})
export class FormUsingModelValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  GetFormData(model:Hero,isValid:boolean ):void
  {
    console.log("Name : "+model.name+", Id: "+model.id);
  }
}
