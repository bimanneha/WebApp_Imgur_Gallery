import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImageDetailsComponent} from "./image-details/image-details.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path:  '', redirectTo:  '', pathMatch:  'full' },
  { path: 'home', component: HomeComponent},
  {path: 'imageDetails/:imageId', component: ImageDetailsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
