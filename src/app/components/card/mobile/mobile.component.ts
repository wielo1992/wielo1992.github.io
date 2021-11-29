import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs/operators';
import { ProductInShop } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart.service';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileComponent {
  constructor(
    private readonly cartService: CartService,
    private readonly dialog: MatDialog
  ) {}

  readonly productsInCart$ = this.cartService.productListinCart$;
  readonly totalPrice$ = this.cartService.totalPrice$;

  clearAll() {
    const dialogRef = this.dialog.open(DialogCardComponent);

    dialogRef
      .afterClosed()
      .pipe(
        filter((result) => !!result),
        tap(() => this.cartService.removeAllProducts())
      )
      .subscribe();
  }
  deleteProduct(product: ProductInShop) {
    this.cartService.deleteProduct(product);
  }
  addQuantity(product: ProductInShop) {
    this.cartService.addQuantity(product);
  }
  reduceQuantity(product: ProductInShop) {
    this.cartService.reduceQuantity(product);
  }
}
