import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPostComponent } from './post/list-post/list-post/list-post.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path:'' , redirectTo :'post-list', pathMatch:'full'},
  { path:'post-list', component : ListPostComponent },
  { path:'new-post', component: CreatePostComponent},
  { path:'new-post/:id' , component:CreatePostComponent},
  { path:'login',component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
