import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-paypal-method',
  templateUrl: './paypal-method.component.html',
  styleUrls: ['./paypal-method.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaypalMethodComponent {
  constructor(private readonly formService: FormServiceService) {}
  readonly paypalMethod = this.formService.paypalMethod;
}
