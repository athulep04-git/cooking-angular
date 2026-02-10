import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apiservice } from '../../services/apiservice';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  token:any="";
  userDetails:any={};
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private api: Apiservice,
    private route: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    const email=this.loginForm.value.email;
    const password=this.loginForm.value.password;
    if(this.loginForm.valid){
      this.api.loginUser({email,password}).subscribe({
        next:(res:any) => {
          console.log(res);
          this.token=res.token
          this.userDetails=res.existingUser
          sessionStorage.setItem("token",this.token)
          sessionStorage.setItem("userDetails",JSON.stringify(this.userDetails))
          alert("Login successful");
          this.route.navigate(['/']);
        },

        error: (err) => {
          console.log(err);
        }
      }
    )
    }
    else {
      alert("fail");
    }
  }
}
