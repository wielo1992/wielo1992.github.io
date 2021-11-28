import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Payment } from '../models/payment';
import { Product, ProductInShop } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public readonly productList = new BehaviorSubject<ProductInShop[]>([]);
  public readonly productList$ = this.productList.asObservable();

  getProduct() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products/').pipe(
      map((products) =>
        products.map((product) => this.mapProductToProductInShop(product))
      ),

      map((products) =>
        products.map((product) =>
          this.mapMenAndWomenClothingToOneCategory(product)
        )
      ),
      tap((res) => this.productList.next(res))
    );
  }
  postPaymentDetails(paymentDetails: Payment) {
    this.http.post(
      'https://shop-147bd-default-rtdb.europe-west1.firebasedatabase.app/post.json',
      paymentDetails
    );
  }
  mapProductToProductInShop(product: Product) {
    return {
      ...product,
      quantity: 1,
      priceAfterSummary: product.price,
      hide: true,
    } as ProductInShop;
  }
  mapMenAndWomenClothingToOneCategory(product: ProductInShop) {
    return product.category === "men's clothing" ||
      product.category === "women's clothing"
      ? { ...product, category: 'fashion' }
      : product;
  }
}
