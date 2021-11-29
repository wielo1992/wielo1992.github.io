import { Injectable } from '@angular/core';
import { ProductInShop } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  addToLocalStorage(data: ProductInShop[]) {
    localStorage.setItem('cardItems', JSON.stringify(data));
  }
  getFromLocalStorage(): ProductInShop[] {
    const cardItems = localStorage.getItem('cardItems');
    return cardItems ? JSON.parse(cardItems) : null;
  }
}
