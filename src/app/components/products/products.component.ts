import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public form = this.filter.filterForm;

  constructor(private cart: CartService, private filter: FilterService) {}

  ngOnInit(): void {
    this.filter.onValueChanges();
  }
}
