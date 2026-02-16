import { Component, OnInit } from '@angular/core';
import { Footer } from "../../footer/footer";
import { Header } from '../../header/header';
import { FormsModule } from '@angular/forms';
import { Apiservice } from '../../services/apiservice';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit{
  constructor(private api:Apiservice){}
  formData:any={
    username:"",
    email:"",
    profession:"",
    message:""
  }
  ngOnInit(): void {
    
  }
  addTestimony(){
    if(this.formData.username && this.formData.email && this.formData.message && this.formData.profession)
    {
    this.api.addTestimonyAPI(this.formData).subscribe({
      next:(res:any)=>{
        console.log(res);
        
      }
    })
  }
  else{
    alert("please fill the form")
  }
  }
}
