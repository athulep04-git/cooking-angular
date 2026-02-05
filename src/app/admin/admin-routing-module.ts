import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { DownloadList } from './download-list/download-list';
import { UserList } from './user-list/user-list';
import { RecipeList } from './recipe-list/recipe-list';
import { RequestList } from './request-list/request-list';
import { ManageRecipe } from './manage-recipe/manage-recipe';


const routes: Routes = [
  {
    path:'', component:Dashboard
  },
  {
    path:'downloadList', component:DownloadList
  },
  {
    path:'userList', component:UserList
  },
  {
    path:'recipeList', component:RecipeList
  },
  {
    path:'requestList', component:RequestList
  },
  {
    path:'recipe/add', component:ManageRecipe
  },
  {
    path:'recipe/edit/:id', component:ManageRecipe
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
