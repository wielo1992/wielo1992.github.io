import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Payment, PaymentMethod } from '../models/payment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  constructor(private fb: FormBuilder, private apiService: ApiService) {}
  confirmationData = new BehaviorSubject<Payment>(null);
  confirmationData$ = this.confirmationData.asObservable();

  readonly paymentMethods = ['Credit Card', 'BLIK', 'PayPal'];

  readonly personalData = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    country: ['', Validators.required],
    city: ['', Validators.required],
    street: ['', Validators.required],
    homeNuber: ['', Validators.required],
  });

  readonly method = this.fb.group({
    method: ['', Validators.required],
  });

  readonly blikMethod = this.fb.group({
    blikCode: ['', Validators.required],
    secureNumber: ['', Validators.required],
    email: ['', Validators.required],
  });
  readonly cardMethod = this.fb.group({
    cardNumber: ['', Validators.required],
    expiredDate: ['', Validators.required],
    secureNumber: ['', Validators.required],
  });
  readonly paypalMethod = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  paymentFormPost() {
    let paymentFormValue;
    switch (this.method.controls['method'].value) {
      case PaymentMethod.BLIK:
        paymentFormValue = this.blikMethod.value;

        break;
      case PaymentMethod.CARD:
        paymentFormValue = this.cardMethod.value;

        break;
      case PaymentMethod.PAYPAL:
        paymentFormValue = this.paypalMethod.value;

        const finalForm: Payment = {
          ...this.personalData.value,
          ...paymentFormValue,
        };
        this.apiService.postPaymentDetails(finalForm).subscribe();
    }
  }
}
