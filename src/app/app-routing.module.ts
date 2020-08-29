import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post/post.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path:"",
    component:ListComponent
  },
  {
    path:"post",
    component:PostComponent
  },
  {
    path:"edit/:id",
    component:EditComponent
  },
  {
    path:"detail/:id",
    component:DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
