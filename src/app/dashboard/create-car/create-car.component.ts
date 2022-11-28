import {Component} from '@angular/core';
import {Control, IFormSettings} from "../../shared/models/Control.model";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {
  CarDetailsFormControls: IFormSettings =
    {
      isHeaderRequired: true,
      subHeaderTest: 'Enter valid car  details',
      headerText: '',
      controls: [
        {
          name: 'brand', label: 'Car Brand', type: 'text', placeholder: 'brand',
          validators: {
            required: true,
            min: 3,
            max: 10
          }
        },
        {
          name: 'model', label: 'Car Model', type: 'text', placeholder: 'model',
          validators: {
            required: true,
          }
        },
        {
          name: 'kmdriven', label: 'Distance- Covered', type: 'text', placeholder: 'kmdriven',
          validators: {
            required: true,
            min: 3,
            max: 10
          }
        },
        {
          name: 'year', label: 'Manufacture Year', type: 'text', placeholder: 'year',
          validators: {
            required: true,
          }
        },
        {
          name: 'shift', label: 'Car Shift', type: 'text', placeholder: 'shift',
          validators: {
            required: true,
            min: 3,
            max: 10
          }
        },
        {
          name: 'fuel', label: 'Car Fuel Type', type: 'text', placeholder: 'fuel type',
          validators: {
            required: true,
          }
        },
        {
          name: 'button', label: 'Next', type: 'Submit', placeholder: 'How much money does it cost?',
          validators: {
            required: true,
          }
        }
      ]
    };
  CarDamagesFormControls: IFormSettings = {
    isHeaderRequired: true,
    subHeaderTest: 'Enter valid car damage details',
    headerText: '',
    controls: [
      {
        name: 'carproblems',
        label: 'which piece of the car has a problem?',
        type: 'text',
        placeholder: 'which piece of the car has a problem?',
        validators: {
          required: true,
          min: 3,
          max: 100
        }
      },
      {
        name: 'Repairingcost',
        label: 'How much money does it cost?',
        type: 'text',
        placeholder: 'How much money does it cost?',
        validators: {
          required: true,
        }
      },
      {
        name: 'button', label: 'Submit', type: 'submit', placeholder: 'How much money does it cost?',
        validators: {
          required: true,
        }
      }
    ]
  };


  stepper=[
    {
      title:'Car Details',description:'Please add your car details',active:'active step'
    },{
      title:'Car Damage Details',description:'Please add your car damage details',active: 'disabled step'
    }];
  OnCarDetailsFormSubmit($event: any) {
    console.log({$event})
    this.stepper[0].active = 'disabled step';
    this.stepper[1].active = 'active step';

  }

  OnCarDamagesFormSubmit($event: any) {
    console.log({$event})
  }
}
