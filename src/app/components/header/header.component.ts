import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private filterService: FilterService,
    private http: ApiService
  ) {}
  public value = '';
  public totalItem = 0;
  public searchedData: string = '';
  public ctrlSearch = this.filterService.ctrlSearch;

  ngOnInit(): void {
    this.cartService.prductList$.subscribe((res) => {
      this.totalItem = res.length;
    });
    this.http.getProduct().subscribe((data) => {
      console.log(data);
    });
  }
}
