import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogCardComponent {}
