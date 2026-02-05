import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";

@Component({
  selector: 'app-user-list',
  imports: [Sidebar],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

}
