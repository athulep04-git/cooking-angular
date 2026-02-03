import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Pnf } from './pages/pnf/pnf';
import { AllRecipes } from './pages/all-recipes/all-recipes';
import { ViewRecipe } from './pages/view-recipe/view-recipe';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';


export const routes: Routes = [
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
        path:'**',component:Pnf
    }
    
];
