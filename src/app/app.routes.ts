import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Pnf } from './pages/pnf/pnf';
import { AllRecipes } from './pages/all-recipes/all-recipes';
import { ViewRecipe } from './pages/view-recipe/view-recipe';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { SavedRecipes } from './pages/saved-recipes/saved-recipes';


export const routes: Routes = [
    //lazy loaded module : // http://localhost:4200/admin/
    {
        path:'admin', loadChildren:()=>import('./admin/admin-module').then(m=>m.AdminModule)
    },
    {
        path:'',component:LandingPage
    },
    {
        path:'login',component:Login
    },
    {
        path:'register',component:Register
    },
    {
        path:'all-recipes',component:AllRecipes
    },
    {
        path:'view-recipe/:id',component:ViewRecipe
    },
    {
        path:'about',component:About
    },
    {
        path:'contact',component:Contact
    },
    {
        path:'saved-recipes',component:SavedRecipes
    },
    {
        path:'**',component:Pnf
    }
    
];
