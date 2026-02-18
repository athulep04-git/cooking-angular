import { Component, OnInit } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Apiservice } from '../../services/apiservice';

@Component({
  selector: 'app-dashboard',
  imports: [Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit{
totalUsers:any=0
totalRecipes:any=0
totalDownloads:any=0
totalRequests:any=0
  constructor(private api:Apiservice){}
  ngOnInit(): void {
    this.getDashboardCount()
  }

  getDashboardCount(){
    this.api.getDashboardCountsAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.totalUsers=res.totalUsers
        this.totalRecipes=res.totalRecipes
        this.totalDownloads=res.totalDownloads
        this.totalRequests=res.totalRequests
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
