import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExpComponent } from './components/new-exp/new-exp.component';
import { EditExpComponent } from './components/edit-exp/edit-exp.component';
import { NewEduComponent } from './components/new-edu/new-edu.component';
import { EditEduComponent } from './components/edit-edu/edit-edu.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'new-exp', component:NewExpComponent},
  {path: 'edit-exp', component:EditExpComponent},
  {path: 'new-edu', component:NewEduComponent},
  {path: 'edit-edu', component:EditEduComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  

})
export class AppRoutingModule { }
