import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'user', component: UserComponent } 
    ]),
  SharedModule,
  ReactiveFormsModule
  ]
})
export class UserModule { }
