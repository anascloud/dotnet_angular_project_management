import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../shared/services/auth';
import { ToastrService } from '@iqx-limited/ngx-toastr';

@Component({
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  selector: 'app-login',
  styles: ``,
  templateUrl: './login.html',
})
export class Login {
  form: FormGroup;
  isSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private service: Auth, private router: Router, private toastr: ToastrService) {
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
    if(this.form.valid){
      this.service.signin(this.form.value).subscribe({
        next: (res:any) => {
          localStorage.setItem('token', res.token);
          this.router.navigateByUrl('/dashboard');
        },
        error: (err) => {
          if(err.status == 400)
            this.toastr.error('Incorrect username or password', 'Login failed');
          else
            console.log('error', err);

        }
      })
      console.log(this.form.value);
    }
  }
}
