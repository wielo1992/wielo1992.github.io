import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private readonly cartService: CartService,
    private readonly filterService: FilterService,
    private readonly http: ApiService
  ) {}

  readonly productListLength$ = this.cartService.productListinCart$.pipe(
    map((products) => products.length)
  );

  readonly ctrlSearch = this.filterService.ctrlSearch;
  private readonly navBarStatusLocal = false;

  readonly subscription = this.http.getProduct().subscribe();

  @Output() navBarStatus = new EventEmitter<boolean>();

  sideNavOpen() {
    this.navBarStatus.emit(!this.navBarStatusLocal);
  }

  ngOnInit(): void {
    this.http.getProduct().subscribe();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
