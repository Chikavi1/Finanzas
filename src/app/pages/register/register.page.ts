import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  options: any;

  name:string = "";
  email:string = "";
  password:string = "";

  constructor() { }

  ngOnInit() {
  }

  register() {
  
    let data = {
      name: 'Juan',
      last_name: 'Perez',
      email: 'oC5kT@example.com',
    }

    console.log(data);
  
    

  }


}
