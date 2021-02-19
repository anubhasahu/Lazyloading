import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';



const routes: Routes = [
  { path: '', redirectTo: 'contactus', pathMatch: 'full' },
  { path: 'contactus', component: ContactusComponent },
  // { path: 'company', loadChildren: 'src/app/company/company.module#CompanyModule' },
  // { path: 'person', loadChildren: 'src/app/person/person.module#PersonModule' },

  { path: 'company',  loadChildren: () => import('../app/company/company.module').then(m => m.CompanyModule), data: { preload1: false } },
  { path: 'person', loadChildren: () => import('../app/person/person.module').then(m => m.PersonModule), data: { preload1: true } }
];

@NgModule({
   //imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
   imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],

  // imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomperloadingService })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
