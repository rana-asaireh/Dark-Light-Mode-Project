import { Component } from '@angular/core';
import { layout } from '../layout/layout';

@Component({
  selector: 'app-add-user',
  imports: [...layout],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  firstNameProp:string='';
  lastNameProp:string='';
  emailProp:string='';
  passwordProp:string='';
  confirmPasswordProp:string='';
  firstNameChange(event:any){
    this.firstNameProp=event.target.value;
  }
  lastNameChange(event:any){
    this.lastNameProp=event.target.value;
  }
  emailChange(event:any){
    this. emailProp=event.target.value;
  }
  passwordChange(event:any){
    this.passwordProp=event.target.value;
  }
  confirmPasswordChange(event:any){
    this.confirmPasswordProp=event.target.value;
  }
  addUserButton(){
    if(this.firstNameProp==="" || this.lastNameProp==="" || this.emailProp==="" || this.passwordProp==="" || this.confirmPasswordProp===""){
      alert('Please fill all required fields')
    }else{
      if( this.passwordProp === this.confirmPasswordProp){
        alert('User has been added sucessfully')
      }else{
        alert('Password and Confirm Password are mismatch!')
      }
    }
  }

  email:string='info@iih.ai';
  theme:string='light-mode';
  toggleTheme() {
    this.theme = this.theme === 'light-mode' ? 'dark-mode' : 'light-mode';
  }

  get headerClass() {
    return this.theme === 'light-mode' ? 'light-mode-header' : 'dark-mode-header';
  }

  get sidebarClass() {
    return this.theme === 'light-mode' ? 'light-mode-sidebar' : 'dark-mode-sidebar';
  }

  get footerClass() {
    return this.theme === 'light-mode' ? 'light-mode-footer' : 'dark-mode-footer';
  }

  get contentClass() {
    return this.theme === 'light-mode' ? 'light-mode-content' : 'dark-mode-content';
  }
    // Dynamic class for logout button based on theme
    get buttonClass() {
      return this.theme === 'dark-mode' ? 'dark-mode-button' : 'light-mode-button';
    }
}
