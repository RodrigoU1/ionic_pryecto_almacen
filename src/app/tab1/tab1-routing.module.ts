import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { NgApexchartsModule } from 'ng-apexcharts';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),NgApexchartsModule],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
