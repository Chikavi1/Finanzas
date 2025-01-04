import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.page.html',
  styleUrls: ['./clients.page.scss'],
})
export class ClientsPage implements OnInit {
name;
email;
gender;
phone;
birthday

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  goBack() {
    this.modalController.dismiss();
  }

  create() {
    let data = {
      name:  this.name,
      email: this.email,
      gender: this.gender,
      phone:  this.phone,
      birthday: this.birthday
    }
    console.log(data);
    
    this.modalController.dismiss();
  }
  
}
