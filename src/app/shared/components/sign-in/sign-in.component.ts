import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {Control, IFormSettings} from '../../models/Control.model';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnChanges {
  public signInForm: FormGroup = this.fb.group({});

  @Input()
  formControls!: IFormSettings;

  @Output()
  formControlValues: any = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges() {
    for (let control of this.formControls.controls) {
      const validatorsToAdd = [];

      for (const [key, value] of Object.entries(control?.validators)) {
        switch (key) {
          case 'min':
            if (typeof value === "number") {
              validatorsToAdd.push(Validators.min(value));
            }
            break;
          case 'max':
            if (typeof value === "number") {
              validatorsToAdd.push(Validators.min(value));
            }
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'email':
            validatorsToAdd.push(Validators.email);
            break;
          default:
            break;
        }
      }
      this.signInForm.addControl(control.name, this.fb.control('', validatorsToAdd));
    }
  }

  onSubmit() {
    debugger
    //if (this.signInForm.valid) {
      console.log(this.signInForm.value);
      this.formControlValues.emit(this.signInForm.value);
    //}


  }
}
