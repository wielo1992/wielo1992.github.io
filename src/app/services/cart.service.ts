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
  public totalPrice: number = 0;
  public totalPriceB = new BehaviorSubject<number>(this.totalPrice);
  public totalPrice$ = this.totalPriceB.asObservable();

  constructor(private localStorage: LocalStorageService) {
    this.loadCart();
    this.productListinCart$.subscribe((data) =>
      this.localStorage.addToLocalStorage(data)
    );
    this.summPrice();
    this.sortByOrder();
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
    console.log(this.productListInCart.value);
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
    this.summPrice();
    this.sortByOrder();
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
    this.summPrice();
    this.sortByOrder();
  }
  summPrice() {
    const priceSummary = this.productListInCart.value.reduce((acc, val) => {
      return acc + val.priceAfterSummary;
    }, 0);
    this.totalPriceB.next(priceSummary);
  }
  hideContent(product: ProductInShop) {
    product.hide = !product.hide;
  }

  sortByOrder() {
    this.productListInCart.value.sort((a, b) => a.orderNumber - b.orderNumber);
  }
}
