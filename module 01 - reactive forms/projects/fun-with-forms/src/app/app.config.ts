import { ApplicationConfig } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MyErrorsComponent } from './components/my-errors/my-errors.component';

export const appConfig: ApplicationConfig = {
  providers: []
};

export const COMMON_MODULES = [
  ReactiveFormsModule, 
  MyErrorsComponent
]
