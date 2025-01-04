import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-business',
  templateUrl: './register-business.page.html',
  styleUrls: ['./register-business.page.scss'],
})
export class RegisterBusinessPage implements OnInit {

  name;
  email;
  password;

  type;
  constructor() {
    this.type = ['restaurant','hotel','bar','estetica','tienda'];
   }

  ngOnInit() {
  }

  register() {

  }
}
