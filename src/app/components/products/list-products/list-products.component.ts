import { ChangeDetectionStrategy, Component } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductInShop } from 'src/app/models/product-model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductsComponent {
  constructor(
    private readonly http: ApiService,
    private readonly cartService: CartService,
    private readonly filter: FilterService
  ) {}

  readonly listOfProducts$ = this.http.productList$;

  readonly filteredProducts$: Observable<ProductInShop[]> = combineLatest([
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

  addToCart(item: ProductInShop) {
    this.cartService.addProduct(item);
  }
}
