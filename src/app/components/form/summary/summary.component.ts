import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Payment } from 'src/app/models/payment';
import { CartService } from 'src/app/services/cart.service';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  constructor(
    private readonly formService: FormServiceService,
    private readonly cartService: CartService
  ) {}
  totalPrice$ = this.cartService.totalPrice$;
  personalDataForm: FormGroup = this.formService.personalData;
  blikMethod = this.formService.blikMethod;
  creditCardMethod = this.formService.cardMethod;
  paypalMethod = this.formService.paypalMethod;
  paymentMethodSelect = this.formService.method;
  paymentMethodsArray = this.formService.paymentMethods;
  confirmationData$: Payment;

  finishPaymentForm() {
    this.formService.paymentFormPost();
  }
}
