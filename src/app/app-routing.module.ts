import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListComponent } from './property-list/property-list.component';

const routes: Routes = [
  {path:'',pathMatch:'full', component: HomeComponent},
  {path:'property',component:PropertyListComponent},
  {path:'property/:id',component:PropertyListComponent},
  {path:'property-detail/:id',component:PropertyDetailComponent},
  {path:'blog',component:BlogComponent},
  {path:'blog/:id',component:BlogComponent},
  {path:'blog-detail/:id',component:BlogDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
