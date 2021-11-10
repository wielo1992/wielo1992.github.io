import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductInShop } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public readonly cardProducts = new BehaviorSubject<ProductInShop[]>([]);
  public readonly cardProducts$ = this.cardProducts.asObservable();

  addToLocalStorage(data: ProductInShop[]) {
    localStorage.setItem('cardItems', JSON.stringify(data));
  }
  getFromLocalStorage() {
    const cardItems = localStorage.getItem('cardItems');
    return cardItems ? JSON.parse(cardItems) : null;
  }
  loadDataToComponent() {
    this.cardProducts.next(this.getFromLocalStorage());
  }
  deleteDataFromLocalStorage() {
    this.cardProducts.next([]);
  }
}
