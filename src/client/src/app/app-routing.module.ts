import { AddPostComponent } from './components/add-post/add-post.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {path: "create-post", component:AddPostComponent },
  {path: "create-user", component:AddUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
