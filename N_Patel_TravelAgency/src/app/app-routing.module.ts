import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component';
import { RouterModule,Routes } from '@angular/router';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:"",
    component: ContentListComponent
  },
  {
    path:"tour/id",
    component: ContentDetailComponent
  },
  {
    path:"tour",
    component:ContentListComponent
  },
  {
    path:"**",
    component: PageNotFoundComponent
  }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
