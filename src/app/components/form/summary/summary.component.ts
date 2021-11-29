import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs/operators';
import { Payment } from 'src/app/models/payment';
import { CartService } from 'src/app/services/cart.service';
import { FormServiceService } from 'src/app/services/form-service.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  constructor(
    private readonly formService: FormServiceService,
    private readonly cartService: CartService,
    private readonly dialog: MatDialog
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
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef
      .afterClosed()
      .pipe(
        filter((result) => !!result),
        tap(() => this.formService.paymentFormPost())
      )
      .subscribe();
  }
}
