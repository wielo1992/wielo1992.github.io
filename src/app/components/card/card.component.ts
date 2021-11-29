import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  constructor(private readonly cartService: CartService) {}

  readonly productsInCart$ = this.cartService.productListinCart$;

  innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize') trackResolution() {
    this.innerWidth = window.innerWidth;
  }
}
