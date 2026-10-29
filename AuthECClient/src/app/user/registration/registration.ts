import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-registration',
  styles: ``,
  templateUrl: './registration.html',
})
export class Registration {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fullName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
