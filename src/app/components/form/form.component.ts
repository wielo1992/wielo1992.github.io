import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs/operators';
import { PaymentMethod } from 'src/app/models/payment';
import { CartService } from 'src/app/services/cart.service';
import { FormServiceService } from 'src/app/services/form-service.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  constructor(
    private readonly formService: FormServiceService,
    private readonly cartService: CartService,
    private readonly dialog: MatDialog
  ) {}

  readonly PaymentMethod = PaymentMethod;

  readonly personalDataForm = this.formService.personalData;
  readonly blikMethod = this.formService.blikMethod;
  readonly creditCardMethod = this.formService.cardMethod;
  readonly paypalMethod = this.formService.paypalMethod;
  readonly paymentMethodSelect = this.formService.method;
  readonly totalPrice$ = this.cartService.totalPrice$;

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
