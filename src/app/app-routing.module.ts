import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog/blog.component';
import { BlogDetailEditComponent } from './blog/detail-edit/blog-detail-edit.component';
import { BlogNewComponent } from './blog/blog-new/blog-new.component';

const routes: Routes = [
  {path: '', redirectTo: '/blog', pathMatch: 'full' },
  {
    path: 'blog',
    component: BlogComponent,
  }
  ,{
    path:':id/edit',
    component: BlogDetailEditComponent
  },
  {
    path:':id/detail',
    component: BlogDetailEditComponent
  },
  {
    path:'add',
    component: BlogNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
