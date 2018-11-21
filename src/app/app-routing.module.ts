import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {PetListComponent} from './pet-list/pet-list.component';
import {PetDetailsComponent} from './pet-details/pet-details.component';
import {PetAddComponent} from './pet-add/pet-add.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {NoComponent} from './no/no.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'pets', component: PetListComponent},
  {path: 'pets/add', component: PetAddComponent, canActivate: [AuthGuard]},
  {path: 'pets/edit/:id', component: PetAddComponent, canActivate: [AuthGuard]},
  {path: 'pets/:id', component: PetDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'no', component: NoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
