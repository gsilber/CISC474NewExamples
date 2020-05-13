import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { GraphComponent } from './pages/graph/graph.component';
import { AddprojectComponent } from './pages/addproject/addproject.component';
import { D3MapComponent } from './d3-map/d3-map.component'


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'graph',component: GraphComponent},
  {path:'addproject',component: AddprojectComponent},
  {path:'d3-map',component: D3MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
