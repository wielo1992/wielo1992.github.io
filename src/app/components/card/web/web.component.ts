import { Component, OnInit } from '@angular/core';
import { ProductInShop } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
})
export class WebComponent implements OnInit {
  constructor(private cartService: CartService) {}

  productsInCart$ = this.cartService.productListinCart$;
  totalPrice$ = this.cartService.totalPrice$;

  displayedColumns = [
    'No.',
    'Image',
    'Name',
    'Price',
    'PriceTotal',
    'Quantity',
    'Actions',
    'Delete',
  ];

  clearAll() {
    if (confirm('Are You sure to clear cart?')) {
      this.cartService.removeAllProducts();
    }
  }
  addQuantity(product: ProductInShop) {
    this.cartService.addQuantity(product);
  }
  reduceQuantity(product: ProductInShop) {
    this.cartService.reduceQuantity(product);
  }
  deleteProduct(product: ProductInShop) {
    this.cartService.deleteProduct(product);
  }

  ngOnInit(): void {}
}
