import { Routes } from '@angular/router';
import { LandingComponent } from 'app/landing/landing.component';
import { RegistrationComponent } from 'app/registration/registration.component';

export const ROUTES: Routes = [
  { path: '', component: LandingComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: '**', redirectTo: '' },
];
