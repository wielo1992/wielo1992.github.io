import { Component } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-method-data-stepper',
  templateUrl: './method-data-stepper.component.html',
  styleUrls: ['./method-data-stepper.component.scss'],
})
export class MethodDataStepperComponent {
  constructor(private readonly formService: FormServiceService) {}

  paymentMethodSelect = this.formService.method;
  paymentMethodsArray = this.formService.paymentMethods;
}
