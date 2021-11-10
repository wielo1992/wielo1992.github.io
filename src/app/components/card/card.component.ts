import { Component, OnInit } from '@angular/core';
import { ProductInShop } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private localStorage: LocalStorageService
  ) {}
  readonly products = this.cartService.productListinCart$;
  readonly cartProducts = this.localStorage.cardProducts$;

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

  ngOnInit(): void {}
}
