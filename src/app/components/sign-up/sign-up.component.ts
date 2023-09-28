import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';


export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    
  );


  constructor(
    private toastr:ToastrService,
    private router: Router,
    private fb: NonNullableFormBuilder,
    private authService:AuthenticationService
  ) {}


  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get name() {
    return this.signUpForm.get('name');
  }

  submit() {
    const { name, email, password } = this.signUpForm.value;

    if (!this.signUpForm.valid || !name || !password || !email) {
      return;
    }

    // this.authService
    // .signUp(email, password)
    // .pipe(
    //   this.toast.observe({
    //     success: 'Congrats! You are all signed up',
    //     loading: 'Signing up...',
    //     error: ({ message }) => `${message}`,
    //   })
    // )
    // .subscribe(() => {
    //   this.router.navigate(['/home']);
    // });
    this.authService.signUp(email, password).subscribe(
      () => {
        this.toastr.success('Congrats! You have successfully signed up ');
        this.router.navigate(['/home']);
      },
      (error) => {
        this.toastr.error(`There was an error: ${error.message}`);
      }
    );
  }
}
