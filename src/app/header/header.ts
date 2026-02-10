import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit{
  token:any="";
  userDetails:any={};
  ngOnInit(): void {
    this.token=sessionStorage.getItem("token")
    this.userDetails=JSON.parse(sessionStorage.getItem("userDetails")||'')
    console.log(this.token,this.userDetails);
    
  }
 
}
