import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-personal-data-stepper',
  templateUrl: './personal-data-stepper.component.html',
  styleUrls: ['./personal-data-stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalDataStepperComponent {
  constructor(private readonly formService: FormServiceService) {}
  readonly personalDataForm = this.formService.personalData;
}
