import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { IncomeComponent } from './calculator/income/income.component';
import { IncomeDetailsComponent } from './calculator/income-details/income-details.component';

@NgModule({
  declarations: [AppComponent, CalculatorComponent, IncomeComponent, IncomeDetailsComponent],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
