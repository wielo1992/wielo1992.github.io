import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PaymentMethod } from 'src/app/models/payment';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  constructor(private readonly formService: FormServiceService) {}

  readonly PaymentMethod = PaymentMethod;

  readonly personalDataForm = this.formService.personalData;
  readonly blikMethod = this.formService.blikMethod;
  readonly creditCardMethod = this.formService.cardMethod;
  readonly paypalMethod = this.formService.paypalMethod;
  readonly paymentMethodSelect = this.formService.method;
}
