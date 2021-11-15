import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(private fb: FormBuilder) {}
  readonly ctrlSearch = this.fb.control(null);
  readonly ctrlCategory = this.fb.control(null);

  valueChangesListener() {
    return combineLatest([
      this.ctrlSearch.valueChanges.pipe(startWith('')),
      this.ctrlCategory.valueChanges.pipe(startWith('')),
    ]);
  }
}
