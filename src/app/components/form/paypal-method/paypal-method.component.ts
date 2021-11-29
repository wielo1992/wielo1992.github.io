import { Component } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-paypal-method',
  templateUrl: './paypal-method.component.html',
  styleUrls: ['./paypal-method.component.scss'],
})
export class PaypalMethodComponent {
  constructor(private readonly formService: FormServiceService) {}
  paypalMethod = this.formService.paypalMethod;
}
