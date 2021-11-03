import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public producList = new BehaviorSubject<Product[]>([]);
  public prductList$ = this.producList.asObservable();
  public search = new BehaviorSubject<string>('');

  constructor() {}

  addProduct(product: Product) {
    this.producList.next([...this.producList.value, product]);
  }

  deleteProduct(product: Product) {
    const filteredProducts = this.producList.value.filter(
      (chosenProduct) => chosenProduct !== product
    );
    this.producList.next(filteredProducts);
    console.log(filteredProducts);
  }
  removeAllProducts() {
    const clearedProducts: Product[] = [];
    this.producList.next(clearedProducts);
  }
}
