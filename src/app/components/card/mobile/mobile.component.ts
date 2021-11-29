import { Component } from '@angular/core';
import { ProductInShop } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent {
  constructor(private readonly cartService: CartService) {}

  productsInCart$ = this.cartService.productListinCart$;
  totalPrice$ = this.cartService.totalPrice$;

  clearAll() {
    if (confirm('Are You sure to clear cart?')) {
      this.cartService.removeAllProducts();
    }
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
