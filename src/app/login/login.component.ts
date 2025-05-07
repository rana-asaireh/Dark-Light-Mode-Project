import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName:string='';
  password:string='';
  userEmailChange(event:any){
    this.userName=event.target.value;
  }
  passwordChange(event:any){
    this.password=event.target.value;
  }
  loginValidation(){
    if(this.userName==="" || this.password===""){
      alert('Incorrect email or password')
    }else{
      alert('Hello '+this.userName)
      window.location.href='/profile'
    }

  }
}
