import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-method-data-stepper',
  templateUrl: './method-data-stepper.component.html',
  styleUrls: ['./method-data-stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MethodDataStepperComponent {
  constructor(private readonly formService: FormServiceService) {}

  readonly paymentMethodSelect = this.formService.method;
  readonly paymentMethodsArray = this.formService.paymentMethods;
}
