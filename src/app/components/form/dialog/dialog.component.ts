import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  constructor(
    private readonly dialogRef: MatDialogRef<DialogComponent>,
    private readonly cartService: CartService
  ) {}

  confirm() {
    this.dialogRef.close(true);
    this.cartService.removeAllProducts();
  }
}
