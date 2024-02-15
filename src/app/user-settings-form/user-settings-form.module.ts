import { NgModule } from '@angular/core';
import { UserSettingsFormComponent } from './user-settings-form.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserSettingsFormComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'registration', component: UserSettingsFormComponent } 
    ]),
    SharedModule
  ]
})
export class UserSettingsFormModule { }
