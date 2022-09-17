import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then((e) => e.DemoModule),
  },
  {
    path: 'contactmanager',
    loadChildren: () =>
      import('./contactmanager/contactmanager.module').then(
        (e) => e.ContactmanagerModule
      ),
  },
  { path: '**', redirectTo: 'contactmanager', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
