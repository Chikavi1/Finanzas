import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  title;
  description;
  type = 1;
  group = 1;



  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }


  goBack() {
    this.modalController.dismiss();
  }


  setType(t) {
    this.type = t;
  }

  setGroup(g) {
    this.group = g;
  }

  create() {
    let data = {
      title : this.title,
      description: this.description,
      type: this.type,
      group: this.group
    }

    console.log(data);

  }

}
