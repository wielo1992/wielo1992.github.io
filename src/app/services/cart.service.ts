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

  constructor(private localStorage: LocalStorageService) {
    this.loadCart();
    this.productListinCart$.subscribe((data) =>
      this.localStorage.addToLocalStorage(data)
    );
  }

  loadCart() {
    this.productListInCart.next(this.localStorage.getFromLocalStorage());
  }

  addProduct(product: ProductInShop) {
    const productInCart = this.productListInCart.value.find(
      (cartProduct) => cartProduct.id === product.id
    );

    productInCart
      ? this.productListInCart.next([
          ...this.productListInCart.value.filter(
            (filteredProductInCard) =>
              filteredProductInCard.id !== productInCart.id
          ),
          { ...productInCart, quantity: productInCart.quantity + 1 },
        ])
      : this.productListInCart.next([...this.productListInCart.value, product]);
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
    this.productListInCart.next([
      ...this.productListInCart.value.filter(
        (filteredProductInCard) => filteredProductInCard.id !== product.id
      ),
      {
        ...product,
        quantity: product.quantity + 1,
        priceAfterSummary: product.priceAfterSummary + product.price,
      },
    ]);
  }
  reduceQuantity(product: ProductInShop) {
    product.quantity === 1
      ? this.deleteProduct(product)
      : this.productListInCart.next([
          ...this.productListInCart.value.filter(
            (filteredProductInCard) => filteredProductInCard.id !== product.id
          ),
          {
            ...product,
            quantity: product.quantity - 1,
            priceAfterSummary: product.priceAfterSummary - product.price,
          },
        ]);
  }
}
