import { Component } from '@angular/core';
import { layout } from '../layout/layout';

@Component({
  selector: 'app-contact-us',
  imports: [...layout],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  nameProp:string='';
  emailProp:string='';
  subjectProp:string='';
  messageProp:string='';


  nameChange(event:any){
    this.nameProp=event.target.value
  }
  emailChange(event:any){
    this.emailProp=event.target.value
  }
  subjectChange(event:any){
    this.subjectProp=event.target.value
  }
  messageChange(event:any){
    this.messageProp=event.target.value
  }
  contactButton(){
    if(this.nameProp==="" || this.emailProp==="" || this.subjectProp==="" || this.messageProp==="" ){
      alert('Please fill all required fields')
    }else{
      alert('Your message has been sent, thank you!')
      window.location.href='/profile'
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
  
  get buttonClass() {
    return this.theme === 'dark-mode' ? 'dark-mode-button' : 'light-mode-button';
  }
}
