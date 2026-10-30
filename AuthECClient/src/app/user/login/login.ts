import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  selector: 'app-login',
  styles: ``,
  templateUrl: './login.html',
})
export class Login {
  form: FormGroup;
  isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  hasDisplayableError(controlName: string): boolean {
    const control = this.form.controls[controlName];
    return Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched) || Boolean(control?.dirty));
  }

  onSubmit(){
    this.isSubmitted = true;
    console.log(this.form.value);
  }
}
