import {Validator,AbstractControl, NG_VALIDATORS} from '@angular/forms';
import {Directive} from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
    selector:'[appSelectValidator]',
    providers:[{
        provide:NG_VALIDATORS,
        useExisting:SelectRequiredDirective,
        multi:true
    }]
})

export class SelectRequiredDirective implements Validator {
    validate(control:AbstractControl):{[key:string]:any}|null
    {
        return control.value==='-1'?{'defaultSelected':true}:null;
    }
}
