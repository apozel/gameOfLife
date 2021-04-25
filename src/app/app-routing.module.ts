import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasPlaygroundComponent } from './playground/canvas-playground/canvas-playground.component';

const routes: Routes = [
  { path: 'canvas', component: CanvasPlaygroundComponent },
  { path: '*', redirectTo: 'canvas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
