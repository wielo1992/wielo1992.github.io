import { Component } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-credit-card-method',
  templateUrl: './credit-card-method.component.html',
  styleUrls: ['./credit-card-method.component.scss'],
})
export class CreditCardMethodComponent {
  constructor(private readonly formService: FormServiceService) {}
  creditCardMethod = this.formService.cardMethod;
}
