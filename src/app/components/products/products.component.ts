import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  constructor(private filter: FilterService) {}

  readonly ctrlCategory = this.filter.ctrlCategory;
}
