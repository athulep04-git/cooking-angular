import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit{

  constructor(private route:Router){}

  token:any="";
  userDetails:any={};


  ngOnInit(): void {
    this.token=sessionStorage.getItem("token")
    this.userDetails=JSON.parse(sessionStorage.getItem("userDetails")||'')
    console.log(this.token,this.userDetails);
    
  }
  logout(){
    sessionStorage.clear()
    this.route.navigateByUrl('/')
  }
 
}
