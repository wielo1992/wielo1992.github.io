import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductInShop } from '../models/product-model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productListInCart = new BehaviorSubject<ProductInShop[]>([]);
  public productListinCart$ = this.productListInCart.asObservable();

  constructor(private localStorage: LocalStorageService) {}

  addProduct(product: ProductInShop) {
    const productInCard = this.productListInCart.value.find(
      (cartProduct) => cartProduct.id === product.id
    );
    productInCard
      ? (productInCard.quantity += 1) &&
        (productInCard.priceAfterSummary =
          product.price * productInCard.quantity)
      : this.productListInCart.next([
          ...this.productListInCart.value,
          { ...product },
        ]);
    this.localStorage.addToLocalStorage(this.productListInCart.value);
  }

  deleteProduct(product: ProductInShop) {
    const filteredProducts = this.productListInCart.value.filter(
      (chosenProduct) => chosenProduct !== product
    );
    this.productListInCart.next(filteredProducts);
  }
  removeAllProducts() {
    const clearedProducts: ProductInShop[] = [];
    this.productListInCart.next(clearedProducts);
  }
  addQuantity(product: ProductInShop) {
    product.quantity = product.quantity + 1;
    product.priceAfterSummary = product.priceAfterSummary + product.price;
  }
  reduceQuantity(product: ProductInShop) {
    product.quantity === 1
      ? this.deleteProduct(product)
      : (product.quantity = product.quantity - 1);
    product.priceAfterSummary = product.priceAfterSummary - product.price;
  }
}
