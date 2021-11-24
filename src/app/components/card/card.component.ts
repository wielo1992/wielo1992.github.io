import { Component, HostListener, OnInit } from '@angular/core';
import { ProductInShop } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private cartService: CartService) {}

  readonly productsInCart = this.cartService.productListinCart$;
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

  innerWidth: any;
  totalPrice$ = this.cartService.totalPrice$;

  deleteProduct(product: ProductInShop) {
    this.cartService.deleteProduct(product);
  }
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
  hideContent(product: ProductInShop) {
    this.cartService.hideContent(product);
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.cartService.clearHide();
  }

  @HostListener('window:resize') trackResolution() {
    this.innerWidth = window.innerWidth;
  }
}
