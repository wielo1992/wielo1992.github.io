import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductInShop } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public producList = new BehaviorSubject<ProductInShop[]>([]);
  public prductList$ = this.producList.asObservable();

  constructor() {}

  addProduct(product: ProductInShop) {
    const productInCard = this.producList.value.find(
      (cartProduct) => cartProduct.id === product.id
    );
    productInCard
      ? (productInCard.quantity += 1) &&
        (productInCard.priceAfterSummary =
          product.price * productInCard.quantity)
      : this.producList.next([...this.producList.value, { ...product }]);
    console.log(this.producList.value);
  }

  deleteProduct(product: ProductInShop) {
    const filteredProducts = this.producList.value.filter(
      (chosenProduct) => chosenProduct !== product
    );
    this.producList.next(filteredProducts);
  }
  removeAllProducts() {
    const clearedProducts: ProductInShop[] = [];
    this.producList.next(clearedProducts);
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
