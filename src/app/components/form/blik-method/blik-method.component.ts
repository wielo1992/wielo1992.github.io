import { Component } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-blik-method',
  templateUrl: './blik-method.component.html',
  styleUrls: ['./blik-method.component.scss'],
})
export class BlikMethodComponent {
  constructor(private readonly formService: FormServiceService) {}
  blikMethod = this.formService.blikMethod;
}
