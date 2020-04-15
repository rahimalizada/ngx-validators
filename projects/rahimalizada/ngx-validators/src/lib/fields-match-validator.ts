import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class FieldsMatchValidator {
  static get(input1name: string, input2name: string): ValidatorFn {
    const result = (formGroup: FormGroup): ValidationErrors | null => {
      const input1 = formGroup.get(input1name);
      const input2 = formGroup.get(input2name);

      const valueA: string = input1.value;
      const valueB: string = input2.value;
      if (valueA === valueB) {
        return null;
      }
      input2.setErrors({ passwordsDoNotMatch: true });
      return { passwordsDoNotMatch: true };
    };

    return result;
  }
}
