import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  readonly products = this.cartService.prductList$;

  constructor(private cartService: CartService) {}

  deleteProduct(product: Product) {
    this.cartService.deleteProduct(product);
  }
  clearAll() {
    this.cartService.removeAllProducts();
  }

  ngOnInit(): void {}
}
