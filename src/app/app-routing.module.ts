import {NgModule} from '@angular/core';
import {NoPreloading, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/today',
    pathMatch: 'full'
  },
  {
    path: 'today',
    loadChildren: () => import('./pages/today/today.module').then(m => m.TodayModule)
  },
  {
    path: 'forecast',
    loadChildren: () => import('./pages/forecast/forecast.module').then(m => m.ForecastModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
