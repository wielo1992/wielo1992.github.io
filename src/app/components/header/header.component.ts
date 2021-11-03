import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public value = '';
  public totalItem = 0;
  public searchedData: string = '';
  public form = this.filterService.filterForm;

  constructor(
    private cartService: CartService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.cartService.prductList$.subscribe((res) => {
      this.totalItem = res.length;
    });
  }
}
