import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GraphComponent } from './pages/graph/graph.component';
import { D3MapComponent } from './d3-map/d3-map.component'
import { StateGraphComponent } from './pages/stateGraph/stateGraph.component'

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'graph',component: GraphComponent},
  {path:'d3-map',component: D3MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
