import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
import { FormServiceService } from 'src/app/services/form-service.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {
  constructor(
    private readonly formService: FormServiceService,
    private readonly cartService: CartService,
    private readonly dialog: MatDialog
  ) {}
  readonly totalPrice$ = this.cartService.totalPrice$;
  readonly personalDataForm = this.formService.personalData;
  readonly blikMethod = this.formService.blikMethod;
  readonly creditCardMethod = this.formService.cardMethod;
  readonly paypalMethod = this.formService.paypalMethod;
  readonly paymentMethodSelect = this.formService.method;
  readonly paymentMethodsArray = this.formService.paymentMethods;

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
