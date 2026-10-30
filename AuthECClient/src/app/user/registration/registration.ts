import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { FirstKeyPipe } from '../../shared/pipes/first-key-pipe';
import { Auth } from '../../shared/services/auth';
import { ToastrService } from '@iqx-limited/ngx-toastr';

@Component({
  imports: [ReactiveFormsModule,CommonModule,FirstKeyPipe],
  selector: 'app-registration',
  styles: ``,
  templateUrl: './registration.html',
})
export class Registration {
  form: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private service: Auth, private toastr: ToastrService) {
    this.form = this.formBuilder.group({
      fullName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/(?=.*[^a-zA-Z0-9])/)
      ]],
      confirmPassword: [''],
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value)
      confirmPassword?.setErrors({ passwordMismatch: true });
    else
      confirmPassword?.setErrors(null);
    return null;
  }

  onSubmit() {
    this.isSubmitted = true;
    if(this.form.valid){
      this.service.createUser(this.form.value)
      .subscribe({
        next: (res:any) => {
          if(res.succeeded){
            this.form.reset();
            this.isSubmitted = false;
            this.toastr.success('New User Created!', 'Registration successful');
          }
          console.log(res);
        },
        error: (error) => {
          console.log('error', error);
        }
      });
    }
  }

  hasDisplayableError(controlName: string): boolean {
    const control = this.form.controls[controlName];
    return Boolean(control?.invalid) && (this.isSubmitted || Boolean(control?.touched));
  }
}
