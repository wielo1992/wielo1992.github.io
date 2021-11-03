import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchedProduct } from '../models/filter';
import { Product } from '../models/product-model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public typedProduct: SearchedProduct = { search: '', category: '' };
  public productList: Product[] = [];

  readonly filterForm = this.fb.group({
    search: [null],
    category: [null],
  });

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.api.getProduct().subscribe((data) => {
      this.productList = data;
    });
  }

  onValueChanges() {
    this.filterForm.valueChanges.subscribe((data) => {
      this.typedProduct = data;
    });
  }
  filterProducts() {
    const filteredProducts = this.productList.filter((data) => {
      this.typedProduct.search === data.title;
      console.log(filteredProducts);
    });
  }
}
