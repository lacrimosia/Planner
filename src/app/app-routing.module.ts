import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LiveComponent } from './live/live.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
	{ path: '', component: LiveComponent },
	{ path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class PlannerRoutingModule { }
