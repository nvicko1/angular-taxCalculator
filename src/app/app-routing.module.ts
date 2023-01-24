import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeDetailsComponent } from './calculator/income-details/income-details.component';
import { IncomeComponent } from './calculator/income/income.component';
const routes: Routes = [
  {
    path: 'IncomeDetails',
    component: IncomeComponent,
  },
  {
    path: '',
    component: IncomeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
