import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },  {
        path: 'add-user',
        component: AddUserComponent
    },{
        path: 'contact-us',
        component: ContactUsComponent
    },{
        path: 'profile',
        component: ProfileComponent
    }
];
