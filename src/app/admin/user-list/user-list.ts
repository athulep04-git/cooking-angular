import { Component, OnInit } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Apiservice } from '../../services/apiservice';

@Component({
  selector: 'app-user-list',
  imports: [Sidebar],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit{
  users:any=[]
  constructor(private api:Apiservice){}
  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.api.getAllUsersAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.users=res
        
      },
      error:(err)=>{
        console.log("error",err);
      }
    })
  }
}
