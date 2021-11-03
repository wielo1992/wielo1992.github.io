import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product-model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  public listOfProducts: Product[] = [];
  searchKey: string = '';
  public filterCategory: Product[] = [];
  public category: string = '';

  constructor(private http: ApiService, private cartService: CartService) {}

  ngOnInit(): void {
    this.http.getProduct().subscribe((res) => {
      this.listOfProducts = res;
    });
  }

  addToCart(item: Product) {
    this.cartService.addProduct(item);
  }
}
