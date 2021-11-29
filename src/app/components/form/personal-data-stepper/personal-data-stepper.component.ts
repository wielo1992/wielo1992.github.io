import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-personal-data-stepper',
  templateUrl: './personal-data-stepper.component.html',
  styleUrls: ['./personal-data-stepper.component.scss'],
})
export class PersonalDataStepperComponent {
  constructor(private readonly formService: FormServiceService) {}
  personalDataForm: FormGroup = this.formService.personalData;
}
