import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private filterService: FilterService,
    private http: ApiService
  ) {}
  public value = '';
  public totalItem = 0;
  public ctrlSearch = this.filterService.ctrlSearch;
  public navBarStatusLocal = false;
  @Output() navBarStatus = new EventEmitter<boolean>();

  sideNavOpen() {
    this.navBarStatus.emit(!this.navBarStatusLocal);
  }

  ngOnInit(): void {
    this.cartService.productListinCart$.subscribe((res) => {
      this.totalItem = res.length;
    });

    this.http.getProduct().subscribe();
  }
}
