import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit{

  originalUserSettings : IUserSettings = {
    name: '',
    emailOffers: true,
    gender: '',
    subscriptionType: 'null',
    address: ''
  };

  // singleModel = "On";
  // singleModel = '1';
  
  userSettings = {...this.originalUserSettings};

  postError = false;
  postErrorMessage = '';
  subscriptionTypes!: Observable<string[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() { 
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onHttpError(errorResponse: any){
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm){
    console.log('in OnSubmit: ', form.valid);

    if (form.valid) {
    this.dataService.postUserSettingsForm(this.userSettings).subscribe({
      next: result => console.log('success : ', result),
      error: error => this.onHttpError(error)
  });}
    else{
      this.postError = true;
      this.postErrorMessage = "Please fix the above errors";
    }

  }


  onBlur(field: NgModel){
    console.log('in onBlur: ', field.valid);
  }

}
