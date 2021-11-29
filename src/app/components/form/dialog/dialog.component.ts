import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(
    private readonly formService: FormServiceService,
    private readonly dialogRef: MatDialogRef<DialogComponent>
  ) {}

  confirm() {
    this.dialogRef.close(true);
  }
}
