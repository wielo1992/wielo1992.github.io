import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products/').pipe(
      map((res: Product[]) => {
        return res;
      })
    );
  }
}
