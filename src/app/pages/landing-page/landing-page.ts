import { Component, OnInit } from '@angular/core';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { Apiservice } from '../../services/apiservice';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit{
  testimony:any=[]
  constructor(private api:Apiservice){}
  ngOnInit(): void {
    this.getApprovedTestimony()
  }
  getApprovedTestimony(){
    this.api.getApprovedTestimonyAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.testimony=res
      }
    })
  }
}
