import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductInShop } from '../models/product-model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private readonly localStorage: LocalStorageService) {
    this.loadCart();
    this.productListinCart$.subscribe((data) =>
      this.localStorage.addToLocalStorage(data)
    );
    this.summPrice();
  }
  private readonly productListInCart = new BehaviorSubject<ProductInShop[]>([]);
  readonly productListinCart$ = this.productListInCart.asObservable();

  private readonly totalPrice = new BehaviorSubject<number>(0);
  readonly totalPrice$ = this.totalPrice.asObservable();

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
          {
            ...productInCart,
            quantity: productInCart.quantity + 1,
            priceAfterSummary:
              productInCart.priceAfterSummary + productInCart.price,
          },
        ])
      : !this.productListInCart.value.length
      ? this.productListInCart.next([
          ...this.productListInCart.value,
          { ...product, orderNumber: 1 },
        ])
      : this.productListInCart.next([
          ...this.productListInCart.value,
          {
            ...product,
            orderNumber: this.productListInCart.value[
              this.productListInCart.value.length - 1
            ].orderNumber++,
          },
        ]);

    this.productListInCart.next(
      this.productListInCart.value.sort((a, b) => a.orderNumber - b.orderNumber)
    );
  }

  deleteProduct(product: ProductInShop) {
    const filteredProducts = this.productListInCart.value.filter(
      (chosenProduct) => chosenProduct !== product
    );
    this.productListInCart.next(filteredProducts);
    this.summPrice();
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
    this.productListInCart.next(
      this.productListInCart.value.sort((a, b) => a.orderNumber - b.orderNumber)
    );
    this.summPrice();
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
    this.productListInCart.next(
      this.productListInCart.value.sort((a, b) => a.orderNumber - b.orderNumber)
    );
    this.summPrice();
  }
  summPrice() {
    const priceSummary = this.productListInCart.value.reduce((acc, val) => {
      return acc + val.priceAfterSummary;
    }, 0);
    this.totalPrice.next(priceSummary);
  }

  private sortByOrder() {
    this.productListInCart.value.sort((a, b) => a.orderNumber - b.orderNumber);
  }
  private loadCart() {
    this.productListInCart.next(this.localStorage.getFromLocalStorage());
  }
}
