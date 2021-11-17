import { Component } from '@angular/core';
import { ProductInShop } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(private cartService: CartService) {}
  readonly productsInCart = this.cartService.productListinCart$;

  deleteProduct(product: ProductInShop) {
    this.cartService.deleteProduct(product);
  }
  clearAll() {
    this.cartService.removeAllProducts();
  }
  addQuantity(product: ProductInShop) {
    this.cartService.addQuantity(product);
  }
  reduceQuantity(product: ProductInShop) {
    this.cartService.reduceQuantity(product);
  }
}
