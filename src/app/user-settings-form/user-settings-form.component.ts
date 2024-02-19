import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'pm-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit{

  originalUserSettings : IUserSettings = {
    name: null,
    emailOffers: null,
    gender: null,
    subscriptionType: null,
    address: null
  };

  userSettings = {...this.originalUserSettings};
  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm){
    console.log('in OnSubmit: ', form.valid);
  }

  onBlur(field: NgModel){
    console.log('in onblur: ', field.valid);
  }

}
