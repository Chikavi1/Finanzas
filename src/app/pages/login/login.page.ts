import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:any;
  password: any;
  
  constructor(
    private router: Router,
    private modalController: ModalController) { }

  ngOnInit() {
  }

  login() {
  
    if (this.email == 'admin' && this.password == 'admin') {
      this.goToTabs();
      localStorage.setItem('isLoggedin', 'true');
    } else {
      alert('Email o contraseña incorrecta');
    }

  }

  goToRegister() {
    this.modalController.create({
      component: RegisterPage,
      cssClass: 'my-custom-class'

    })
  }

  goToTabs() {
    this.router.navigateByUrl('/');
  }

}
