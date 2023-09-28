import { Component,OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
// import { Toast, ToastrService } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private fb:NonNullableFormBuilder,private router:Router,
    private toastr: ToastrService,
    private authService:AuthenticationService){

  }

  ngOnInit(): void {}


  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password) {
      return;
    }

    

    // this.authService
    // .login(email, password)
    // .pipe(
    //   this.toast.observe({
    //     success: 'Logged in successfully',
    //     loading: 'Logging in...',
    //     error: ({ message }) => `There was an error: ${message} `,
      
    //   })
    // )
    // .subscribe(() => {
    //   this.router.navigate(['/home']);
    // });
    
    this.authService.login(email, password).subscribe(
      () => {
        this.toastr.success('Logged in successfully');
        this.router.navigate(['/home']);
      },
      (error) => {
        this.toastr.error(`There was an error: ${error.message}`);
      }
    );
  }
}
