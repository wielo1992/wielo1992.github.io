import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Payment } from 'src/app/models/payment';
import { CartService } from 'src/app/services/cart.service';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private readonly formService: FormServiceService,
    private readonly cartServcie: CartService
  ) {}

  totalPrice$ = this.cartServcie.totalPrice$;
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

  ngOnInit(): void {}
}
