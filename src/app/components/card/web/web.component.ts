import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, tap } from 'rxjs/operators';
import { ProductInShop } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart.service';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebComponent {
  constructor(
    private readonly cartService: CartService,
    private readonly dialog: MatDialog
  ) {}

  readonly productsInCart$ = this.cartService.productListinCart$;
  readonly totalPrice$ = this.cartService.totalPrice$;

  readonly displayedColumns = [
    'No.',
    'Image',
    'Name',
    'Price',
    'PriceTotal',
    'Quantity',
    'Actions',
    'Delete',
  ];

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

  addQuantity(product: ProductInShop) {
    this.cartService.addQuantity(product);
  }
  reduceQuantity(product: ProductInShop) {
    this.cartService.reduceQuantity(product);
  }
  deleteProduct(product: ProductInShop) {
    this.cartService.deleteProduct(product);
  }
}
