import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VisitsbyUsersByBusinessPage } from '../visitsby-users-by-business/visitsby-users-by-business.page';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {
  id;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    
    let user = {
      name: 'Jian',
      id: 1
    }

  let array = [];
  let narray = localStorage.getItem('client_see');
  if (narray) {
    array = JSON.parse(narray); 
  }

  array.push(user);

  localStorage.setItem('client_see', JSON.stringify(array));
}

  goBack(){
    this.modalController.dismiss();
  }

  sendNotification(){
    console.log('notification sent');
  }

  goToVisits(){
    this.modalController.create({
      component: VisitsbyUsersByBusinessPage,
      cssClass: 'my-custom-class'
    })
    .then(modal => {
      modal.present();
    });
  }
  
}
