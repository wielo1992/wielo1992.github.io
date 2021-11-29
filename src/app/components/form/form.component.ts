import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PaymentMethod } from 'src/app/models/payment';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(private readonly formService: FormServiceService) {}

  readonly PaymentMethod = PaymentMethod;

  personalDataForm: FormGroup = this.formService.personalData;
  blikMethod = this.formService.blikMethod;
  creditCardMethod = this.formService.cardMethod;
  paypalMethod = this.formService.paypalMethod;
  paymentMethodSelect = this.formService.method;
}
