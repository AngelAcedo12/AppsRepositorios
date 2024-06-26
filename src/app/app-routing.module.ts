import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { oauthGuard } from 'guards/oauth.guard';

const routes: Routes = [
  {
    path:'home',

    canMatch: [oauthGuard],
    loadChildren: ()=> import("./AllPages/homePage/home-page.module").then(m => m.HomePageModule),

  },
  {
    path:'wheater',
    data:{title:'El tiempo ☁'},
    canMatch: [oauthGuard],
    loadChildren: ()=> import("./AllPages/wheater/Pages/pages.module").then(m => m.PagesModule)
  },
  {
    path:'banderas',
    data:{title:'Banderas'},
    canMatch: [oauthGuard],
    loadChildren: ()=> import("./AllPages/banderas/banderas.module").then(m => m.BanderasModule)
  },
  {
    path:'map',
    data:{title:'Mapa'},
    canMatch: [oauthGuard],
    loadChildren: ()=> import("./AllPages/Map/Pages/pages.module").then(m => m.PagesModule)
  },
  {
    path:'oauth',
    loadChildren: ()=> import("./AllPages/oauth/oauth.module").then(m => m.OauthModule)
  },
  {
    path:'tokens',
    loadChildren: ()=> import("./AllPages/tokens/tokens.module").then(m => m.TokensModule)
  },
  {
    path:'tasks',
    data:{title:'Tasks'},
    loadChildren: () => import("./AllPages/Tasks/list-task.module").then(m => m.ListTaskModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'**',
    loadComponent: () => import("./AllPages/404/404.component").then(m => m.NotFoundComponent)
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
