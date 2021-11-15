import { Component } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private filter: FilterService) {}

  public ctrlCategory = this.filter.ctrlCategory;
}
