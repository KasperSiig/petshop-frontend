import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {PetListComponent} from './pet-list/pet-list.component';
import {PetDetailsComponent} from './pet-details/pet-details.component';
import {PetAddComponent} from './pet-add/pet-add.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './shared/guards/auth.guard';

const routes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: 'pets', component: PetListComponent},
  {path: 'pets/add', component: PetAddComponent},
  {path: 'pets/edit/:id', component: PetAddComponent},
  {path: 'pets/:id', component: PetDetailsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
