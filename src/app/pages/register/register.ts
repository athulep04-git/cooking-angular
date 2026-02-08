import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apiservice } from '../../services/apiservice';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm:FormGroup;
  constructor(private fb:FormBuilder,
    private api:Apiservice,
    private route:Router
  ){
     this.registerForm=this.fb.group({
      username:['',[Validators.required]],
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required]]
     }) 
  }
   
  register(){
    const username=this.registerForm.value.username
    const email=this.registerForm.value.email
    const password=this.registerForm.value.password
    if(this.registerForm.valid){
     
      this.api.registerUser({username,email,password}).subscribe({
              next:(res:any)=>{
           console.log(res);
          alert("regestration successfull")
           this.route.navigate(['/login']);
           
      },
      error:(err)=>{
        console.log(err);
      }
    }
      )
      }
    
    else{
      alert("fail")
    }
  }
  
}
