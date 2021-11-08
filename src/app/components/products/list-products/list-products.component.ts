import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductInShop } from 'src/app/models/product-model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  constructor(
    private http: ApiService,
    private cartService: CartService,
    private filter: FilterService
  ) {}

  public listOfProducts$ = this.http.productList$;

  filteredProducts$: Observable<ProductInShop[]> = combineLatest([
    this.listOfProducts$,
    this.filter.valueChangesListener(),
  ]).pipe(
    map(([products, [search, category]]) =>
      products.filter((product) => {
        return category === ''
          ? product.title.toLocaleLowerCase().trim().includes(search)
          : product.title.toLocaleLowerCase().trim().includes(search) &&
              product.category === category;
      })
    )
  );

  ngOnInit(): void {}

  addToCart(item: ProductInShop) {
    this.cartService.addProduct(item);
  }
}
